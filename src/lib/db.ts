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

    const sql = postgres(connectionString, {
        ssl: process.env.NODE_ENV === "production" ? "require" : false,
        max: 10,
        idle_timeout: 20,
        connect_timeout: 10,
    });

    if (process.env.NODE_ENV !== "production") {
        globalForPg.sql = sql;
    }

    return sql;
}

export { getDb };

/**
 * Garante que a tabela de leads existe.
 * Chamado automaticamente na primeira requisição.
 */
export async function ensureLeadsTable() {
    const sql = getDb();
    await sql`
        CREATE TABLE IF NOT EXISTS leads (
            id         SERIAL PRIMARY KEY,
            email      TEXT NOT NULL,
            file_id    TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;
}
