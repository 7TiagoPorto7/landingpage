import postgres from "postgres";

const sql = postgres("postgresql://postgres:OvRbEYgbzMnBboJsqNRjdyOzvgeFBfyn@tramway.proxy.rlwy.net:35168/railway", {
    ssl: false,
    max: 1
});

async function run() {
    try {
        console.log("Iniciando a atualização das datas do fórum...");

        // 1. Randomizar as datas das perguntas para os últimos 30 dias
        await sql`
            UPDATE forum_questions
            SET created_at = NOW() - (random() * 30 || ' days')::interval;
        `;
        console.log("Datas das perguntas atualizadas.");

        // 2. Randomizar as datas das respostas baseando-se na data da pergunta associada
        // A resposta deve acontecer de 1 hora a 72 horas após a pergunta
        await sql`
            UPDATE forum_answers fa
            SET created_at = fq.created_at + (random() * 72 + 1 || ' hours')::interval
            FROM forum_questions fq
            WHERE fa.question_id = fq.id;
        `;
        console.log("Datas das respostas atualizadas.");
        
        // 3. Opcionalmente randomizar os view_counts e like_counts se necessário, mas o usuário pediu horários.
        
    } catch (e) {
        console.error("Erro:", e);
    } finally {
        await sql.end();
        console.log("Concluído!");
    }
}

run();
