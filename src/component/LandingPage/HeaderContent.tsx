import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

const AnimateSlideinShow = dynamic(() => import('@/Animation/AnimationSlideInShow'));

export default function HeaderContent() {
    return (
        <React.Fragment>
            <Container style={{ paddingTop: '110px' }}>
                <Row className="row-cols-2">
                    <Col md={6} sm={12} lg={6} xxl={6}>
                        <Col lg={10} xl={10} xxl={10}>
                            <AnimateSlideinShow duration={0.3} type={'bottom'} key={'cnt-pnl'}>
                                <div className="big-title mb-2">
                                    Mangseller Bantu Jualan <span className="text-warning">Produkmu!</span>
                                </div>
                                <p className="text-white-50">Jadilah produsen dan supplier kami dan dapatkan jaringan customer lebih luas lagi.</p>
                                <Row className="row-cols row-cols-lg-2 mt-5 mb-3">
                                    <Col lg={5} md={5} sm={5}>
                                        <motion.button
                                            transition={{ duration: 0.2 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="btn btn-md bg-mang-light w-100 fw-bold text-white shadow-lg">
                                            Daftar
                                        </motion.button>
                                    </Col>
                                    <Col lg={5} md={5} sm={5}>
                                        <motion.button
                                            transition={{ duration: 0.3 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="btn btn-md bg-white w-100 fw-bold shadow-lg">
                                            Hubungi Kami
                                        </motion.button>
                                    </Col>
                                </Row>
                            </AnimateSlideinShow>
                        </Col>
                    </Col>
                    <Col md={6} sm={12} lg={6} xl={6} xxl={6}>
                        <div className="if-content">
                           <AnimateSlideinShow duration={0.5} type={'top'} key={'cnt-vds'}>
                                <motion.iframe
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="shadow-lg"
                                    src="https://www.youtube.com/embed/LQti0bvDsv4?controls=0&loop=1" />
                           </AnimateSlideinShow>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}