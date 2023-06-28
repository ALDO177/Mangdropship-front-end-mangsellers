
import { Container, Card } from 'react-bootstrap';
import OutAdventage from './OurAdvantage';

export default function ComponentSection2() {
    return (
        <section id='section-pages'>
            <Container>
                <div className='our'>
                    <h5 className='our-title'>Keunggulan Kami</h5>
                    <p className='our-sub-title text-black-50'>Nikmati semuanya setelah berhasil join di Mangseller</p>
                </div>
               <OutAdventage/>
            </Container>
        </section>
    )
}