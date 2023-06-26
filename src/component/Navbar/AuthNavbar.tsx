'use client'

import Image from "next/image";
import React from "react";
import {Navbar, Container} from 'react-bootstrap';
import imgs from '@/assets/images/logo-light.png';

export default function AuthNavbar(){
    return(
        <React.Fragment> 
            <Navbar expand="lg" 
                className="bg-mang-dodgerblue" 
                style={{color: 'var(--bs-white)'}}>
                <Container fluid>
                    <Navbar.Brand style={{color: 'var(--bs-white)'}}>
                        <Image src={ imgs } alt="Logo Mangsellers" width={170}/>
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        style={{outline:'none'}}
                        onClick={() => console.log('Hello World')}/>
                        <Navbar.Collapse className="justify-content-end">
                            Default...
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}