
'use client'

import React from "react";
import { Col, Card, InputGroup, Form, Button, Alert } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import * as IconsFs from 'react-icons/fa6';
import logoMangsellers from '@/assets/images/logo-light.png';
import Image from "next/image";
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from "next/navigation";
import AnimationSlide from "@/Animation/AnimationSlideShow";
import AlertAuthentication from "@/component/Alert/Auth/AlertAuthentication";
import { useGetCategoryProdukQuery } from "@/Service/Api/Apis";
import { ErrorAuthentication } from "@/Error/ErrorAuthentication";

export default function PageLogin() {

    const routeChanges = useRouter();
    const email = React.useRef("");
    const password = React.useRef("");
    const params = useSearchParams();
    const [showAlert, setShowAlert] = React.useState(true);

    const { data, isLoading, error } = useGetCategoryProdukQuery('sub-category');
    console.log(data)

    if (error) {
        console.log(error)
    }

    const handleClick = () => {
        routeChanges.push('/auth/register');
    }

    const handleSubmitLoginCredentials = async (event: any) => {
        event.preventDefault();
        signIn('credentials', {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: '/auth/login'
        });
    }
    const ErrorData = ErrorAuthentication.find((values) => {
        return values.typeError === params?.get('error')?.toLocaleLowerCase();
    });

    return (
        <React.Fragment>
            <AnimationSlide>
                {params?.has('error') && (
                    <AlertAuthentication
                        type={"danger"}
                        callback={() => setShowAlert(false)}
                        typeClose={true}>
                        <p>{ErrorData?.message}</p>
                    </AlertAuthentication>
                )}
                <Card className="border-0 shadow-lg">
                    <Card.Body className="p-0">
                        <div className="row justify-content-center">
                            <Col lg={8} md={12} sm={12} xxl={8} xl={8}>
                                <div className="row justify-content-center m-3">
                                    <Col xl={8} xxl={8} lg={8} md={12} sm={12}>
                                        <h5 className="text-center fw-bold text-color-dodgerblue">Hallo Mangdropship Seller!</h5>
                                        <h6 className="text-center">Masuk Dengan Akun Anda.</h6>
                                        <form onSubmit={handleSubmitLoginCredentials}>
                                            <div className="content-form mt-4">
                                                <InputGroup className="mb-4">
                                                    <InputGroup.Text className="bg-mang-dodgerblue text-white">
                                                        <Icons.BsEnvelopeOpenFill size={18} />
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        onChange={async (event) => email.current = event?.target.value}
                                                        placeholder="Email"
                                                        type="email"
                                                        style={{ height: '44px' }}>
                                                    </Form.Control>
                                                </InputGroup>
                                            </div>
                                            <div className="content-form mt-4">
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-mang-dodgerblue text-white">
                                                        <IconsFs.FaLock size={18} />
                                                    </InputGroup.Text>
                                                    <Form.Control placeholder="Password"
                                                        onChange={async (event) => password.current = event?.target.value}
                                                        type="password" name="password"
                                                        style={{ height: '44px' }}>
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
                                                    type="submit"
                                                    className="btn form-control bg-mang-dodgerblue text-white">
                                                    <IconsFs.FaRightFromBracket /> Login
                                                </button>
                                            </div>
                                        </form>
                                        <div className="btn-login mt-2">
                                            <Button
                                                onClick={async () => signIn('google', {
                                                    redirect: true,
                                                    callbackUrl: `${process.env.NEXTAUTH_URL}/auth/login`
                                                })}
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
                                            Tidak Mempunyai Account? <strong className="text-color-dodgerblue"
                                                onClick={handleClick}
                                                style={{ cursor: 'pointer' }}>Create Account</strong>
                                        </p>
                                    </Col>
                                </div>
                            </Col>
                            <Col lg={4}
                                className="bg-mang-dodgerblue d-none d-xxl-block d-xl-block d-lg-block"
                                style={{ borderRadius: '0rem 0.375rem 0.375rem 0rem' }}>
                                <div className="d-flex h-100 align-items-center text-white">
                                    <div className="content">
                                        <Image src={logoMangsellers} className="d-block mx-auto" alt="logo mangseller" width={180} />
                                        <p className="text-center">Silakan Login dengan menggunakan Email dan Password yang telah Anda daftarkan untuk mengelola akun Seller Mangdropship.</p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Card.Body>
                </Card>
            </AnimationSlide>
        </React.Fragment>
    )
}