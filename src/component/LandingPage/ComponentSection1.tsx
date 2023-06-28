import dynamic from "next/dynamic"
import React from "react";
import { Col, Container, Row } from 'react-bootstrap';

const WebAnimationBack  = dynamic(() => import('@/component/Wave/WaveBackgroundAnimation'));
const HeaderContent     = dynamic(() => import('@/component/LandingPage/HeaderContent'));
const NavbarLandingPage = dynamic(() => import('@/component/LandingPage/Navbar'));

export const runtime = 'edge';

export default function ComponentSection1() {
    return (
        <section id='section-pages'>
            <main className="header-main">
                <WebAnimationBack />
                <div className='position-absolute w-100 d-block' style={{ zIndex: 100, top: 0 }}>
                    <React.Suspense fallback={<h4>Loading...</h4>}>
                        <NavbarLandingPage />
                    </React.Suspense>
                    <HeaderContent />
                </div>
            </main>
            <main className='content-info'>
                <Container>
                   <Row>
                        <Col lg={12} md={12} xl={12} xxl={12}>
                            <div className="info-text">
                                Dengan menjadi suplier di Mangseller, kamu akan mendapatkan segudang manfaat dalam pengelolaan bisnismu, karena produk kamu akan dipromosikan langsung oleh ribuan dropshipper kami yang tersebar di seluruh Indonesia.
                            </div>
                            <button className="btn mx-auto d-block btn-lg bg-mang-light text-white mt-3 shadow-lg">
                                Buat Akunmu Sekarang!
                            </button>
                        </Col>
                   </Row>
                </Container>
            </main>
        </section>
    )
}