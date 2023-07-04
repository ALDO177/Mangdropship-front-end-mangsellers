'use client'

import MangdropshipLoading from "@/Loading/MangdropshipLoading";
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify'

export default function pageDasboard(){
    const {data: session, status} = useSession({required: true, onUnauthenticated() {
        toast.error('Anda Telah Keluar dari Account Tautan,  Silahkan Untuk Login Kembali', {
            theme: 'colored',
            autoClose: 3000
        });
        redirect('/')
    }});

    if(status === 'loading') return <MangdropshipLoading/>
    return(
        <React.Fragment>
            <Button variant="danger" onClick={async() => signOut({
            })}>Logout</Button>
            <h2>Mangseller Dasboard</h2>
        </React.Fragment>
    )
}

pageDasboard.auth ={
    role: "mang-sellers",
    loading: <h1>Loading...</h1>,
    unauthorized: "/auth/login", // redirect to this url
}