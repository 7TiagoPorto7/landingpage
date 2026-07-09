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

/**
 * Garante que todas as tabelas do fórum existem.
 * Chamado automaticamente no primeiro request de cada rota do fórum.
 */
export async function ensureForumTables() {
    const sql = getDb();

    await sql`
        CREATE TABLE IF NOT EXISTS forum_users (
            id            SERIAL PRIMARY KEY,
            name          TEXT NOT NULL,
            email         TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role          TEXT NOT NULL DEFAULT 'member',
            created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    await sql`
        CREATE TABLE IF NOT EXISTS forum_questions (
            id          SERIAL PRIMARY KEY,
            user_id     INT NOT NULL REFERENCES forum_users(id) ON DELETE CASCADE,
            title       TEXT NOT NULL,
            body        TEXT NOT NULL,
            tags        TEXT[] NOT NULL DEFAULT '{}',
            view_count  INT NOT NULL DEFAULT 0,
            is_solved   BOOLEAN NOT NULL DEFAULT FALSE,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    await sql`
        CREATE TABLE IF NOT EXISTS forum_answers (
            id          SERIAL PRIMARY KEY,
            question_id INT NOT NULL REFERENCES forum_questions(id) ON DELETE CASCADE,
            user_id     INT NOT NULL REFERENCES forum_users(id) ON DELETE CASCADE,
            body        TEXT NOT NULL,
            is_accepted BOOLEAN NOT NULL DEFAULT FALSE,
            like_count  INT NOT NULL DEFAULT 0,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    await sql`
        CREATE TABLE IF NOT EXISTS forum_likes (
            id        SERIAL PRIMARY KEY,
            user_id   INT NOT NULL REFERENCES forum_users(id) ON DELETE CASCADE,
            answer_id INT NOT NULL REFERENCES forum_answers(id) ON DELETE CASCADE,
            UNIQUE(user_id, answer_id)
        )
    `;
}
