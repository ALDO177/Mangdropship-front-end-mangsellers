import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props{
    children?: ReactNode
}

export const MangdropshipProviderAuth = (props: Props) =>{
    return <SessionProvider>{props?.children}</SessionProvider>
}