
'use client'

import { PropsForPageLogin, StateForPageLogin } from "@/interface/AuthInterface";
import React from "react";
import { Row, Col, Card, Container, InputGroup, Form, Button } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import * as IconsFs from 'react-icons/fa6';
import logoMangsellers from '@/assets/images/logo-light.png';
import Image from "next/image";
import { useCookies, Cookies } from 'react-cookie';
import {signIn, signOut, useSession} from 'next-auth/react';
import {getServerSession} from 'next-auth';
import { authOptions } from "@/AuthLogin/GoogleLogin";

export default class PageLogin extends React.Component<PropsForPageLogin, StateForPageLogin>{

    public constructor(props: PropsForPageLogin) {
        super(props);
        this.CardLoginAccount = this.CardLoginAccount.bind(this);
    }

    public componentDidMount(): void {

    }

    protected CardLoginAccount(): JSX.Element {
        const [_, setCookie] = useCookies(['tokens']);
        const handleChangesCookie = (props: {name: string}) =>{
            setCookie("tokens", props?.name, {path: '/'});
            console.log('cookie regenerate');
        }
        (async() =>{
            const session = await getServerSession(authOptions);
            console.log(session)
        })()
        return (
            <React.Fragment>
                <Card className="border-0 shadow-lg">
                    <Card.Body className="p-0">
                        <Row>
                            <Col lg={8}>
                                <div className="d-flex justify-content-center p-3">
                                    <Col xl={8} xxl={8} lg={8} md={10} sm={12}>
                                        <h5 className="text-center fw-bold text-color-dodgerblue">Hallo Mangdropship Seller!</h5>
                                        <h6 className="text-center">Masuk Dengan Akun Anda.</h6>
                                        <div className="content-form mt-4">
                                            <InputGroup className="mb-4">
                                                <InputGroup.Text className="bg-mang-dodgerblue text-white">
                                                    <Icons.BsEnvelopeOpenFill size={18} />
                                                </InputGroup.Text>
                                                <Form.Control placeholder="Email" style={{ height: '44px' }}>
                                                </Form.Control>
                                            </InputGroup>
                                        </div>
                                        <div className="content-form mt-4">
                                            <InputGroup>
                                                <InputGroup.Text className="bg-mang-dodgerblue text-white">
                                                    <IconsFs.FaLock size={18} />
                                                </InputGroup.Text>
                                                <Form.Control placeholder="Password" style={{ height: '44px' }}>
                                                </Form.Control>
                                                <InputGroup.Text>@</InputGroup.Text>
                                            </InputGroup>
                                            <div className="d-flex justify-content-between mt-3" style={{ fontSize: '13px' }}>
                                                <Form.Check>
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label className="text-color-dodgerblue">Remember Me</Form.Check.Label>
                                                </Form.Check>
                                                <span className="text-color-dodgerblue">Forgor Password?</span>
                                            </div>
                                        </div>
                                        <div className="btn-login mt-3">
                                            <button
                                                className="btn form-control bg-mang-dodgerblue text-white">
                                                <IconsFs.FaRightFromBracket /> Login
                                            </button>
                                        </div>
                                        <div className="btn-login mt-2">
                                            <Button
                                             onClick={async() => signIn('google')}
                                                className="form-control"
                                                variant="outline-danger">
                                                <Icons.BsGoogle size={18} />
                                            </Button>
                                        </div>
                                        <div className="btn-login mt-2">
                                            <Button
                                                className="form-control"
                                                variant="outline-primary">
                                                <Icons.BsFacebook size={18} />
                                            </Button>
                                        </div>
                                        <p className="text-center mt-3" style={{ fontSize: '12px' }}>
                                            Tidak Mempunyai Account? <strong className="text-color-dodgerblue">Create Account</strong>
                                        </p>
                                    </Col>
                                </div>
                            </Col>
                            <Col lg={4}
                                className="bg-mang-dodgerblue"
                                style={{ borderRadius: '0rem 0.375rem 0.375rem 0rem' }}>
                                <div className="d-flex h-100 align-items-center text-white">
                                    <div className="content w-100">
                                        <Image src={logoMangsellers} className="d-block mx-auto" alt="logo mangseller" width={180} />
                                        <p className="text-center">Silakan Login dengan menggunakan Email dan Password yang telah Anda daftarkan untuk mengelola akun Seller Mangdropship.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7} xl={7} xxl={8} md={7} sm={7}>
                            <div className="d-flex align-items-center" style={{ height: '89vh' }}>
                               <this.CardLoginAccount/>
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
        )
    }
}