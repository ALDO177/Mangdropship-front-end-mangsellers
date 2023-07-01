'use client';

import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TabsTimelineProgres } from "../Arrays/ComponentArrays";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { tabsAnimation } from "@/Animation/Options";
import AnimationSlideInShow from "@/Animation/AnimationSlideInShow";

type StateComponent = {
    id: number,
    path: string,
    slugh: string,
    text: string,
    imgInfo: any
}

export default function ComponentSection4() {
    const [selectTab, setSelectTabs] = React.useState<StateComponent>(TabsTimelineProgres[0]);
    const handleSelectedTabs = (selectTabs: StateComponent) => {
        setSelectTabs(selectTabs);
    }

    return (
        <>
            <Container style={{ minHeight: '80vh' }}>
                <div className="stepper-wrapper">
                    {
                        TabsTimelineProgres.map((values, idx) => (
                            <div className={`stepper-item ${values?.id === selectTab?.id ? 'completed lines' : ''}`} key={idx}>
                                <div
                                    className="step-counter"
                                    style={{ cursor: 'pointer' }}
                                    onClick={async () => handleSelectedTabs(values)}>
                                    <Image src={values?.path}
                                        alt={values?.slugh}
                                        className="mx-auto d-block"
                                        width={30}
                                        height={30} />
                                </div>
                                <div className="step-name text-center" style={{ maxWidth: '100px' }}>{values?.slugh}</div>
                            </div>
                        ))
                    }
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectTab ? selectTab?.id : 'empty'}
                        transition={{ duration: 0.3 }}
                        initial={'hidde'}
                        animate={'show'}
                        exit={{ y: -50, scale: 0.2, opacity: 0 }}
                        variants={tabsAnimation}>
                        <Row className="row-cols row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 mt-lg-4 mt-xl-5">
                            <Col lg={5} xxl={5} className="align-self-center">
                                <AnimationSlideInShow type="right" duration={0.7}>
                                    <Image src={selectTab?.imgInfo} alt="lofo" height={500} className="mx-auto d-block" />
                                </AnimationSlideInShow>
                            </Col>
                            <Col lg={7} xxl={6} className="align-self-center">
                                <AnimationSlideInShow type="left" duration={0.8}>
                                    <Card className="shadow-lg w-100 border-0">
                                        <Card.Body>
                                            <Container>
                                                <div className="d-flex">
                                                    <Image
                                                        key={selectTab?.id}
                                                        className="align-self-center"
                                                        src={selectTab?.path}
                                                        width={50}
                                                        height={50}
                                                        alt="logo-1" />
                                                    <h5 className="text-color-dodgerblue mb-4 align-self-center">
                                                        Supplier Upload Produk di Mangseller
                                                    </h5>
                                                </div>
                                                <div dangerouslySetInnerHTML={{ __html: selectTab?.text }}></div>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </AnimationSlideInShow>
                            </Col>
                        </Row>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </>
    )
}