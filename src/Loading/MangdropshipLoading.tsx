'use client'

import Image from "next/image"
import React from "react"
import loadingMang from '@/assets/images/animated-unscreen.gif';

export default function MangdropshipLoading(){
    return(
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
                <Image src={loadingMang} alt="loading-mang" width={220}/>
            </div>
        </React.Fragment>
    )
}