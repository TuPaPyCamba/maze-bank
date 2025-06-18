import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware()

export const config = {
    matcher: [
        '/dashboard(.*)',     // proteger todo bajo /dashboard
        '/api/(.*)',
    ]
}