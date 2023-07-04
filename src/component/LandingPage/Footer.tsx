
'use client'

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap"
import * as FaIcons from 'react-icons/fa';

import logoMang from '../../../public/assets/logo-light.png';

export default function Footer() {
    return (
        <>
            <Container fluid id="footer">
                <Image src={logoMang} alt="logo" className="mb-3 mx-auto d-block" width={200}/>
                <Container>
                    <Row className="row-cols row-cols-xxl-5 row-cols-lg-5">
                        <Col sm={4} md={4} className="mb-3">
                            <div className="d-flex gap-3 mb-3">
                                <FaIcons.FaPhone size={15}/>
                                <div>+62 822-2300-0508</div>
                            </div>
                            <div className="d-flex gap-3 mb-3">
                                <FaIcons.FaEnvelope size={20}/>
                                <div>support@mangseller.com</div>
                            </div>
                            <div className="d-flex gap-3 mb-3">
                                <FaIcons.FaMapMarker size={24}/>
                                <div>
                                    Graha Selly Group,
                                    Jl. Pesantren No.27 Jeru,
                                    Turen - Malang.
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} md={3} className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium!
                        </Col>
                        <Col sm={4} md={3} className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium!
                        </Col>
                        <Col sm={4} md={3} className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium!
                        </Col>
                        <Col sm={4} md={3} className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium!
                        </Col>
                    </Row>
                    <hr />
                </Container>
                <p className="text-white text-center">© Mangdropship 2023. Hak Cipta Dilindungi.</p>
            </Container>
        </>
    )
}