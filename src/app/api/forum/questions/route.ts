import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { getSession } from "@/lib/auth";

// GET /api/forum/questions — Lista perguntas com filtros
export async function GET(req: NextRequest) {
    try {
        await ensureForumTables();
        const sql = getDb();

        const { searchParams } = new URL(req.url);
        const tag = searchParams.get("tag");
        const sort = searchParams.get("sort") || "recent"; // recent | popular | unanswered
        const search = searchParams.get("search") || "";
        const page = parseInt(searchParams.get("page") || "1");
        const limit = 20;
        const offset = (page - 1) * limit;

        // Query dinâmica com todos os filtros
        let questions;

        if (tag && search) {
            if (sort === "popular") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE ${tag} = ANY(q.tags) AND (q.title ILIKE ${'%' + search + '%'} OR q.body ILIKE ${'%' + search + '%'})
                    GROUP BY q.id, u.name
                    ORDER BY total_likes DESC, q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else if (sort === "unanswered") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE ${tag} = ANY(q.tags) AND (q.title ILIKE ${'%' + search + '%'} OR q.body ILIKE ${'%' + search + '%'})
                    GROUP BY q.id, u.name
                    HAVING COUNT(DISTINCT a.id) = 0
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE ${tag} = ANY(q.tags) AND (q.title ILIKE ${'%' + search + '%'} OR q.body ILIKE ${'%' + search + '%'})
                    GROUP BY q.id, u.name
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            }
        } else if (tag) {
            if (sort === "popular") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE ${tag} = ANY(q.tags)
                    GROUP BY q.id, u.name
                    ORDER BY total_likes DESC, q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else if (sort === "unanswered") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE ${tag} = ANY(q.tags)
                    GROUP BY q.id, u.name
                    HAVING COUNT(DISTINCT a.id) = 0
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE ${tag} = ANY(q.tags)
                    GROUP BY q.id, u.name
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            }
        } else if (search) {
            if (sort === "popular") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE q.title ILIKE ${'%' + search + '%'} OR q.body ILIKE ${'%' + search + '%'}
                    GROUP BY q.id, u.name
                    ORDER BY total_likes DESC, q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else if (sort === "unanswered") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE q.title ILIKE ${'%' + search + '%'} OR q.body ILIKE ${'%' + search + '%'}
                    GROUP BY q.id, u.name
                    HAVING COUNT(DISTINCT a.id) = 0
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    WHERE q.title ILIKE ${'%' + search + '%'} OR q.body ILIKE ${'%' + search + '%'}
                    GROUP BY q.id, u.name
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            }
        } else {
            if (sort === "popular") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    GROUP BY q.id, u.name
                    ORDER BY total_likes DESC, q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else if (sort === "unanswered") {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    GROUP BY q.id, u.name
                    HAVING COUNT(DISTINCT a.id) = 0
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            } else {
                questions = await sql`
                    SELECT q.id, q.title, q.tags, q.view_count, q.is_solved, q.created_at,
                           u.name AS author_name,
                           COUNT(DISTINCT a.id)::int AS answer_count,
                           COALESCE(SUM(a.like_count), 0)::int AS total_likes
                    FROM forum_questions q
                    JOIN forum_users u ON u.id = q.user_id
                    LEFT JOIN forum_answers a ON a.question_id = q.id
                    GROUP BY q.id, u.name
                    ORDER BY q.created_at DESC
                    LIMIT ${limit} OFFSET ${offset}
                `;
            }
        }

        return NextResponse.json({ questions });
    } catch (err) {
        console.error("[GET /api/forum/questions]", err);
        return NextResponse.json({ error: "Erro ao buscar perguntas." }, { status: 500 });
    }
}

// POST /api/forum/questions — Criar pergunta
export async function POST(req: NextRequest) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
        }

        const { title, body, tags } = await req.json();

        if (!title?.trim() || !body?.trim()) {
            return NextResponse.json({ error: "Título e corpo são obrigatórios." }, { status: 400 });
        }

        await ensureForumTables();
        const sql = getDb();

        const [question] = await sql`
            INSERT INTO forum_questions (user_id, title, body, tags)
            VALUES (${session.userId}, ${title.trim()}, ${body.trim()}, ${tags || []})
            RETURNING id, title
        `;

        return NextResponse.json({ success: true, question });
    } catch (err) {
        console.error("[POST /api/forum/questions]", err);
        return NextResponse.json({ error: "Erro ao criar pergunta." }, { status: 500 });
    }
}
