import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

/** @param {import("next/server").NextRequest} req */

export async function middleware(req) {
	const protectedPages = ["/middleware-protected", "/games"];

	if (protectedPages.includes(req.nextUrl.pathname)) {
		const session = await getToken({ req, secret: process.env.SECRET });
		// You could also check for any property on the session object,
		// like role === "admin" or name === "John Doe", etc.
		if (!session) return NextResponse.redirect("/api/auth/signin");
		// If user is authenticated, continue.
	}
}
