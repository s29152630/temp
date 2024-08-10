import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export const config = { matcher: ["/spaceItemF/:path"] }

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/space')) {
//         return NextResponse.rewrite(new URL('/about-2', request.url))
//     }

//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//         return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//     }
// }