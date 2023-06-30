'use client'

import React from "react"
import { Container } from "react-bootstrap"
import ComponentSection4 from "./ComponentSection4"


type PropsComponent = {
    children?: React.ReactNode
}

export default function CompoenentSection3(props: PropsComponent) {
    return (
        <Container style={{paddingTop: '100px'}}>
            <div className='our'>
                <h5 className='our-title'>Bagaimana Proses Terjualnya Produkmu?</h5>
                <p className='our-sub-title text-black-50'></p>
            </div>
            <ComponentSection4 />
        </Container>
    )
}