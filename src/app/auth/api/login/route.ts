import { request } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request){
    return NextResponse.json(request.body)
}