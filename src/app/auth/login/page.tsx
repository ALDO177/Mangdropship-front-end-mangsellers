
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
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValidationlogin } from "@/interface/Validation";
import { ValidationAnimation } from "@/component/Validation/AnimationMotion";
import * as BsIcons from 'react-icons/bs';


export default function PageLogin() {

    const { register, handleSubmit, watch, formState: { errors }, setFocus } = useForm<FormValidationlogin>();
    const routeChanges = useRouter();
    const params = useSearchParams();
    const [__, setShowAlert] = React.useState(true);
    const { data, isLoading, error } = useGetCategoryProdukQuery('sub-category');
    const [showPass, setShowPass] = React.useState(false);

    if (error) {
        console.log(error)
    }

    const handleClick = () => {
        routeChanges.push('/auth/register');
    }

    React.useEffect(() =>{
        setFocus('email');
    }, [setFocus]);

    const SubmitLoginCredentials: SubmitHandler<FormValidationlogin> = async (data) => {
        signIn('credentials', {
            email:data.email,
            password: data.password,
            redirect: true,
            callbackUrl: '/'
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
                                        <h5 className="text-center text-color-dodgerblue">Hallo Mangdropship Seller!</h5>
                                        <h6 className="text-center">Masuk Dengan Akun Anda.</h6>
                                        <form onSubmit={handleSubmit(SubmitLoginCredentials)}>
                                            <div className="content-form mt-4">
                                                <InputGroup className="">
                                                    <InputGroup.Text id="vld-email" className="bg-mang-dodgerblue text-white">
                                                        <Icons.BsEnvelopeOpenFill size={18} />
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        id="vld-email"
                                                        {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                                                        placeholder="Email"
                                                        type="text"
                                                        style={{ height: '44px' }}>
                                                    </Form.Control>
                                                </InputGroup>
                                                <ValidationAnimation error={errors} type="email" validation="required">
                                                    <small style={{ fontSize: '12px' }} className="text-danger">Email wajib diisi</small>
                                                </ValidationAnimation>
                                                <ValidationAnimation error={errors} type="email" validation="pattern">
                                                    <small style={{ fontSize: '12px' }} className="text-danger">Email tidak Valid</small>
                                                </ValidationAnimation>
                                            </div>
                                            <div className="content-form mt-3">
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-mang-dodgerblue text-white">
                                                        <IconsFs.FaLock size={18} />
                                                    </InputGroup.Text>
                                                    <Form.Control placeholder="Password"
                                                        {...register('password', { required: true })}
                                                        type={showPass ? 'text' : 'password'} name="password"
                                                        style={{ height: '44px' }}>
                                                    </Form.Control>
                                                    <InputGroup.Text style={{cursor: 'pointer'}} onClick={() =>  setShowPass(!showPass)}>
                                                        {showPass ? <BsIcons.BsEye/> : <BsIcons.BsEyeSlash/>}
                                                    </InputGroup.Text>
                                                </InputGroup>
                                                <ValidationAnimation error={errors} type="password" validation="required">
                                                    <small style={{ fontSize: '12px' }} className="text-danger">Password wajib diisi</small>
                                                </ValidationAnimation>
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
                                                onClick={async () => signIn('google')}
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