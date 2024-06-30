import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/', '/dashboard', '/settings']; // means the dashboard 
const publicRoutes = ['/login', '/terms', '/privacy'];

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/(fr|en)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/((?!_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)',
    ],
};