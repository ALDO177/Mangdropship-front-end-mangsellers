import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { config } from "../../config";
import { NextApiRequest, NextApiResponse } from "next";

export const authOptions = (req: NextApiRequest, res:NextApiResponse, cook: any) : NextAuthOptions => {
   return {
    session: {
      strategy: 'jwt',
      maxAge: 5 * 24 * 60 * 60, // 5 days
    },
  
    pages: {
      signIn: '/auth/login',
      signOut: '/auth/signouth',
      error: '/auth/login'
    },
  
    cookies: {
      callbackUrl: {
        name: '__Secure-next-auth.session-token',
        options: {
          sameSite: 'lax',
          path: '/',
          secure: true
        }
      }
    },
  
    callbacks: {
      async redirect(params) {
        return `${params.baseUrl}/auth/login`
      },
      async signIn({ account, profile }) {
        if (account?.provider === 'google') {
          const getBackendActivedProviders = await fetch(`${config.API_URL}/mang-seller/auth/login-providers/google`, {
            method: 'POST',
            headers:{
              'Content-type' : 'application/json',
              'X-API-MANG': config.X_API_MANG as string,
            },
            body: JSON.stringify({email: profile?.email, provider_id: account?.providerAccountId })
          });

          const jsonResponse = await getBackendActivedProviders.json();
          if(getBackendActivedProviders.ok){
            cook.set('mangseller-session',  jsonResponse?.accessToken)
            return true;
          }
        }
        return false;
      },
  
      jwt: async ({ token, user } : {token: any, user: any}) => {
        if(user?.user){
          token.email = user?.user.email;
          token.name  = user?.user.name;
          token.accessTokens = user?.accessToken
        }
        return token;
      },
  
      session: ({ session, token, user } : {session: any, token: any, user: any}) => {
        if(user?.user){
           session.user.email  = user.user.email;
           session.user.name   = user.user.name;
           session.accessToken = user.accessToken;
        }
        return session;
      }
    },
  
    providers: [
      GoogleProvider({
        name: 'sign-in-google',
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_ID_SECRET as string,
      }),
  
      CredentialsProvider({
        name: "sign-in-credentials",
        type: 'credentials',
        credentials: {
          email: {
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "Email",
          },
          password: { label: "Password", type: "password", name: 'password' },
        },
  
        async authorize(credentials) {
          const loginBackend = await fetch(`${config.API_URL}/mang-seller/auth/login`, {
            method: 'POST',
            headers: new Headers({
              'Content-type': 'application/json',
              'X-API-MANG': config.X_API_MANG as string,
            }),
            body: JSON.stringify(credentials)
          });
  
          const josnResponse = await loginBackend.json();
          if (loginBackend.ok) return josnResponse;
          console.log(josnResponse);
          return null;
        },
      }),
    ],
  }
}