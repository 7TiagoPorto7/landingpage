import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "mfp-forum-secret-key-change-in-production-2024"
);

// Rotas que exigem login
const PROTECTED_ROUTES = ["/forum/nova", "/forum/perfil"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const requiresAuth = PROTECTED_ROUTES.some((route) =>
        pathname.startsWith(route)
    );

    if (!requiresAuth) return NextResponse.next();

    const token = request.cookies.get("mfp_session")?.value;

    if (!token) {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    try {
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: ["/forum/nova", "/forum/perfil"],
};
