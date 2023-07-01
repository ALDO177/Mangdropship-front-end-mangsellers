
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import OutAdventage from './OurAdvantage';

export default function ComponentSection2() {
    return (
        <section id='section-pages'>
            <Container style={{paddingTop: '100px'}}>
                <div className='our'>
                    <h5 className='our-title'>Keunggulan Kami</h5>
                    <p className='our-sub-title text-black-50'>Nikmati semuanya setelah berhasil join di Mangseller</p>
                </div>
               <OutAdventage/>
               <Row style={{marginTop:'100px'}}>
                  <Col xxl={7}>
                        <div className='fs-4 text-black-50'>Sudah Siap Kebanjiran Pesanan</div>
                        <div className='fs-4 text-black-50'>Segera Buat Akun Atau Hubungi Kami</div>
                  </Col>
                  <Col xxl={5} className='align-self-center'>
                        <div className="d-flex gap-3">
                            <button className='btn btn-md bg-mang-light text-white' style={{width: '200px'}}>Buat Akun</button>
                            <button className='btn btn-md btn-outline-mang' style={{width: '200px'}}>Hubungi Kami</button>
                        </div>
                  </Col>
               </Row>
            </Container>
        </section>
    )
}