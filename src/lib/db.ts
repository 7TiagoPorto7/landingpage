import postgres from "postgres";

// Conexão lazy — criada só quando getDb() é chamado pela primeira vez
const globalForPg = globalThis as unknown as {
    sql: ReturnType<typeof postgres> | undefined;
};

function getDb(): ReturnType<typeof postgres> {
    if (globalForPg.sql) return globalForPg.sql;

    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error(
            "DATABASE_URL não definida. Configure em .env.local (dev) ou nas variáveis do Railway (produção)."
        );
    }

    // Na rede interna do Railway (*.railway.internal) o Postgres não usa SSL; por fora, exige
    const internal = /@[^/]*\.railway\.internal[:/]/.test(connectionString);
    const sql = postgres(connectionString, {
        ssl: process.env.NODE_ENV === "production" && !internal ? "require" : false,
        max: 10,
        idle_timeout: 20,
        connect_timeout: 10,
    });

    // Um pool por processo (em dev, sobrevive ao hot reload via globalThis)
    globalForPg.sql = sql;

    return sql;
}

export { getDb };

/**
 * Garante que a tabela de leads existe.
 * Chamado automaticamente na primeira requisição.
 */
let leadsTableReady: Promise<void> | null = null;

export function ensureLeadsTable(): Promise<void> {
    leadsTableReady ??= createLeadsTable().catch((err) => {
        leadsTableReady = null;
        throw err;
    });
    return leadsTableReady;
}

async function createLeadsTable() {
    const sql = getDb();
    await sql`
        CREATE TABLE IF NOT EXISTS leads (
            id         SERIAL PRIMARY KEY,
            email      TEXT NOT NULL,
            file_id    TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // Adiciona as colunas UTM caso a tabela já exista
    for (const col of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
        await sql.unsafe(`ALTER TABLE leads ADD COLUMN IF NOT EXISTS ${col} TEXT`);
    }
}

/**
 * Garante que a tabela de pedidos de consultoria existe (formulário de /consultoria).
 */
let consultoriaTableReady: Promise<void> | null = null;

export function ensureConsultoriaTable(): Promise<void> {
    consultoriaTableReady ??= getDb()`
        CREATE TABLE IF NOT EXISTS consultoria_leads (
            id           SERIAL PRIMARY KEY,
            name         TEXT NOT NULL,
            email        TEXT NOT NULL,
            phone        TEXT,
            company      TEXT,
            message      TEXT,
            utm_source   TEXT,
            utm_medium   TEXT,
            utm_campaign TEXT,
            created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `
        .then(() => undefined)
        .catch((err) => {
            consultoriaTableReady = null;
            throw err;
        });
    return consultoriaTableReady;
}
