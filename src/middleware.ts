import {NextResponse, type NextRequest} from 'next/server';

export async function middleware(request: Request){
    const regex = new RegExp('/auth/*');
}