'use client'
import AuthNavbar from "@/component/Navbar/AuthNavbar";
import { PropsLayoutAuth } from "@/interface/AuthInterface";
import { useSession } from "next-auth/react";
import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { redirect } from 'next/navigation';
import MangdropshipLoading from "@/Loading/MangdropshipLoading";
import {Container, Row, Col} from 'react-bootstrap';
import HanldeLoadingAuthentication from "./loading";
import AnimationSlide from "@/Animation/AnimationSlideShow";

export default function LayoutAuth(props: PropsLayoutAuth) {
    const { status } = useSession();
    if (status === 'authenticated') redirect('/dasboard');
    if (status === 'loading') {
        return <MangdropshipLoading />
    }

    return (
        <React.Fragment>
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                minBreakpoint="xxs">
                <div className="content">
                    <AuthNavbar />
                    <React.Suspense fallback={<HanldeLoadingAuthentication/>}>
                        <React.Fragment>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={7} xl={7} xxl={8} md={7} sm={7}>
                                        <div className="d-flex align-items-center" style={{ height: '89vh' }}>
                                            {props?.children}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div
                                className="footer w-100 bg-mang-dodgerblue text-center p-2 text-white"
                                style={{ fontSize: '12px' }}>
                                ©2023 MANGSELLER APP V2.1.1. CREATED BY MANGDROPSHIP
                            </div>
                        </React.Fragment>
                    </React.Suspense>
                </div>
            </ThemeProvider>
        </React.Fragment>
    )
}
