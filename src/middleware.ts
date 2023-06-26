import {NextResponse, type NextRequest} from 'next/server'

export function middleware(request: Request){
    const regex = new RegExp('/auth/*');
    // if(regex.test(request.url)){
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
}

export const config = {
    matcher: '/auth/:path*'
}