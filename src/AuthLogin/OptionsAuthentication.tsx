import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { config } from "../../config";

export const authOptions: NextAuthOptions = {

  session: {
    strategy: 'jwt',
    maxAge: 5 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/auth/login',
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

  callbacks:{
     async redirect(params) {
       console.log(params)
       return `${params.baseUrl}/auth/login`
     },
     async signIn({account, profile}) {
      if(account?.provider === 'google'){
        return false;
      }
       return true;
     },
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
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password", name: 'password' },
      },

      async authorize(credentials) {
        console.log(credentials?.email, credentials?.password);
        const loginBackend = await fetch(`${config.API_URL}/mang-seller/auth/login`, {
           method: 'POST',
           headers: new Headers({
            'Content-type' : 'application/json',
            'X-API-MANG' : config.X_API_MANG as string,
           }),
           body: JSON.stringify(credentials)
        });
        const josnResponse = await loginBackend.json();
         if(loginBackend.ok){
            console.log(josnResponse);
            return null;
         }
         console.log(josnResponse);
        return null;
      },
    }),
  ],
}