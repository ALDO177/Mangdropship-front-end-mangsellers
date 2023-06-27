'use client'
import { MangdropshipProviderAuth } from "@/Providers/MangdropshipAuthProviders";
import React, { ReactNode } from "react";

export const metadata ={
    title : 'Login Mangseller',
    description: 'loremjioiqweg askfksa'
}

interface PropsForLayoutLogin{
    children?: ReactNode,
}

export default function LayoutLogin(props: PropsForLayoutLogin){
    return(
      <> {props?.children}</>
    )   
}