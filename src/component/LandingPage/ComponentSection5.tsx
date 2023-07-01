'use client'

import { Card, Col, Container, Row } from "react-bootstrap";
import { Splide, SplideSlide, SplideTrack, Options } from "@splidejs/react-splide";
import * as FaIcons from 'react-icons/fa6';

const optionsSplideSlide: Options = {
    type: 'loop',
    perPage: 3,
    autoplay: true,
    interval: 3000,
    perMove: 1,
    autoHeight: false,
    rewind: false,
    gap: '1.5rem',
    arrows: true,
    pagination: false,
    paginationKeyboard: true,
    focus: 'center',
    breakpoints: {
        640: {
            perPage: 1
        },
    }
}

export default function ComponentSection5() {
    return (
        <Container className="mb-4" style={{ minHeight: '80vh' }}>
            <div className='our'>
                <h5 className='our-title'>TESTIMONI</h5>
                <p className='our-sub-title text-black-50'>Ini Kata Mereka Tentang Kami...</p>
            </div>
            <Splide
                onArrowsMounted={(splide, prev, next) => console.log(prev, next)}
                hasTrack={false}
                options={optionsSplideSlide}>
                <div className="custom-wrapper p-3">
                    <SplideTrack>
                        <SplideSlide>
                            <Card>
                                <Card.Header>
                                    qwofiojqwf qwnfoif
                                </Card.Header>
                                <Card.Body style={{ height: '300px' }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Odio maiores sunt nobis nihil! Impedit voluptatem nam
                                    distinctio numquam totam. Soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Officia quibusdam, suscipit eius quaerat qui ab itaque perferendis dolore facere enim!
                                </Card.Body>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card>
                                <Card.Header>
                                    qwofiojqwf qwnfoif
                                </Card.Header>
                                <Card.Body style={{ height: '300px' }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Odio maiores sunt nobis nihil! Impedit voluptatem nam
                                    distinctio numquam totam. Soluta.
                                </Card.Body>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card>
                                <Card.Header>
                                    qwofiojqwf qwnfoif
                                </Card.Header>
                                <Card.Body style={{ height: '300px' }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Odio maiores sunt nobis nihil! Impedit voluptatem nam
                                    distinctio numquam totam. Soluta.
                                </Card.Body>
                            </Card>
                        </SplideSlide>
                    </SplideTrack>
                </div>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev"><FaIcons.FaAngleRight /></button>
                    <button className="splide__arrow splide__arrow--next"><FaIcons.FaAngleRight /></button>
                </div>
            </Splide>
            <Col>
                <Card className="border-0 shadow-lg" style={{ minHeight: '200px' }}>
                    <Card.Body className="d-flex align-items-center p-5">
                        <Row className="row-cols row-cols-lg-2">
                            <Col xxl={8} lg={8} className="mb-3">
                                <div className="text-other-color1">Apakah anda Produsen dan suplier tangan pertama?</div>
                                <div className="text-other-color1 text-black-50">Daftar sekarang, atau hubungi kami.</div>
                            </Col>
                            <Col className="align-self-center" xxl={4} lg={4}>
                                <div className="d-flex gap-3">
                                    <button className='btn btn-md bg-mang-light text-white' style={{ minWidth: '220px' }}>Daftar</button>
                                    <button className='btn btn-md btn-outline-mang' style={{ minWidth: '220px' }}>Hubungi Kami</button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}