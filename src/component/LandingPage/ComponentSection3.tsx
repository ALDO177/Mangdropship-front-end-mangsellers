'use client'

import React from "react"
import { Container } from "react-bootstrap"

type PropsComponent = {
    children?: React.ReactNode
}

export default function CompoenentSection3(props: PropsComponent){
    return(
        <Container>
             <div className='our'>
                <h5 className='our-title'>Keunggulan Kami</h5>
                <p className='our-sub-title text-black-50'>Nikmati semuanya setelah berhasil join di Mangseller</p>
             </div>
        </Container>
    )
}