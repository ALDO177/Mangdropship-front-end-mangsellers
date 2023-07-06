import { authOptions } from "@/AuthLogin/OptionsAuthentication";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { getServerSession } from "next-auth"
import { cookies } from 'next/headers';
import { config } from "../../../../../config";

export async function GET(req: NextApiRequest, res: NextApiResponse){
    
    const cook = cookies();
    const sesseion = await getServerSession(authOptions(req, res, cook));
    console.log(sesseion)
    return NextAuth(req, res, authOptions(req, res, cook));
}

export async function POST(req: NextApiRequest, res: NextApiResponse){
    const cook = cookies();
    return NextAuth(req, res, authOptions(req, res, cook))
}
