import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : NextAuthOptions = {

    pages:{
      signIn: '/auth/login'
    },

    cookies:{
      callbackUrl:{
        name: '__Secure-next-auth.session-token',
        options:{
          sameSite: 'lax',
          path: '/',
          secure: true
        }
      }
    },
    
    providers: [
          GoogleProvider({
              clientId: process.env.GOOGLE_CLIENT_ID as string,
              clientSecret: process.env.GOOGLE_ID_SECRET as string,
          }),
    ],
}