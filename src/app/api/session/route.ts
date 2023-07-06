import { authOptions } from "@/AuthLogin/OptionsAuthentication";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {cookies} from 'next/headers'

export async function GET(req: NextApiRequest, res: NextApiResponse){
    const cook = cookies();
    const session = await getServerSession(authOptions(req, res, cook));
    return NextResponse.json({authenticated: !!session, session})
}