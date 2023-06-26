import {type NextRequest } from "next/server"
import { ReactNode } from "react"
import {useCookies} from 'react-cookie'

export interface PropsLayoutAuth{
    children?: ReactNode
}

export interface PropsForPageLogin{
    params?: any,
    request?: NextRequest,
}

export interface PropsForPageRegister{
    
}

export interface StateForPageLogin{
    
}