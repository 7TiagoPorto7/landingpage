import postgres from "postgres";
import fs from "fs";

const sql = postgres("postgresql://postgres:OvRbEYgbzMnBboJsqNRjdyOzvgeFBfyn@tramway.proxy.rlwy.net:35168/railway", {
    ssl: false,
    max: 1
});

const fileContent = fs.readFileSync("/Users/tiagoporto/.gemini/antigravity/brain/836a9517-5764-463f-9da2-0614256be63c/forum_perguntas_respostas.md", "utf-8");

const questionsRaw = fileContent.split("***");

const mapTag = (title) => {
    const t = title.toLowerCase();
    if (t.includes("wacc") || t.includes("perpetuidade") || t.includes("p/l") || t.includes("desconto")) return ["Valuation"];
    if (t.includes("beta")) return ["Risco & Retorno", "Valuation"];
    if (t.includes("fcfe") || t.includes("fluxo")) return ["Fluxo de Caixa"];
    if (t.includes("leasing") || t.includes("capex")) return ["Balanço", "DRE"];
    if (t.includes("cac") || t.includes("ncg") || t.includes("giro")) return ["Eficiência"];
    if (t.includes("margem")) return ["DRE"];
    return ["Modelagem"];
};

async function getOrCreateUser(name) {
    const email = `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}@example.com`;
    let user = await sql`SELECT id FROM forum_users WHERE email = ${email}`;
    if (user.length === 0) {
        user = await sql`
            INSERT INTO forum_users (name, email, password_hash, role) 
            VALUES (${name}, ${email}, 'placeholder_hash', 'member') 
            RETURNING id
        `;
    }
    return user[0].id;
}

async function run() {
    for (const block of questionsRaw) {
        if (!block.trim()) continue;
        const lines = block.trim().split("\n");
        let currentQ = null;
        let currentAns = null;
        let currentAnsBody = [];
        
        let answers = [];
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith("**Tópico:")) {
                currentQ = {
                    title: line.replace("**Tópico:", "").replace("**", "").trim(),
                    body: [],
                    author: "",
                    tags: []
                };
                currentQ.tags = mapTag(currentQ.title);
            } else if (line.startsWith("**Autor:")) {
                currentQ.author = line.replace("**Autor:", "").replace("**", "").trim();
            } else if (line.startsWith("**Resposta:")) {
                if (currentAns) {
                    currentAns.body = currentAnsBody.join("\n").trim();
                    answers.push(currentAns);
                }
                currentAns = {
                    author: line.replace("**Resposta:", "").replace("**", "").trim(),
                    body: ""
                };
                currentAnsBody = [];
            } else {
                if (currentAns) {
                    currentAnsBody.push(line);
                } else if (currentQ && currentQ.author && !line.startsWith("#")) {
                    currentQ.body.push(line);
                }
            }
        }
        if (currentAns) {
            currentAns.body = currentAnsBody.join("\n").trim();
            answers.push(currentAns);
        }
        
        if (currentQ && currentQ.title) {
            const qBody = currentQ.body.join("\n").trim();
            if (!qBody) continue;
            
            const userId = await getOrCreateUser(currentQ.author);
            const insertedQ = await sql`
                INSERT INTO forum_questions (user_id, title, body, tags, view_count, is_solved)
                VALUES (${userId}, ${currentQ.title}, ${qBody}, ${currentQ.tags}, ${Math.floor(Math.random() * 100) + 10}, false)
                RETURNING id
            `;
            const questionId = insertedQ[0].id;
            
            for (const ans of answers) {
                const ansUserId = await getOrCreateUser(ans.author);
                await sql`
                    INSERT INTO forum_answers (question_id, user_id, body, is_accepted, like_count)
                    VALUES (${questionId}, ${ansUserId}, ${ans.body}, false, ${Math.floor(Math.random() * 20)})
                `;
            }
            console.log(`Inserido: ${currentQ.title} com ${answers.length} respostas`);
        }
    }
    
    await sql.end();
    console.log("Concluído!");
}

run().catch(console.error);
