
import { Navbar, Container } from 'react-bootstrap';
import Image from 'next/image';
import logoMangSeller from '@/assets/images/logo-light.png';
import * as IconsFs from 'react-icons/fa6';
import dynamic from 'next/dynamic';

const PanelAuthIcon = dynamic(() => import('@/component/Navbar/PanelAuthIcon'));

export default function NavbarLandingPage() {
    return (
        <Navbar expand="lg" className='text-white'>
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={logoMangSeller} alt='logo mangsellers' width={190} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end text-white">
                    <div className="d-flex gap-5">
                        <div className='align-self-center d-flex gap-3'>
                            <Navbar.Text className='text-white fw-bold'>Beranda</Navbar.Text>
                            <Navbar.Text className='text-white fw-bold'>Cara Kerja</Navbar.Text>
                        </div>
                        <div className='d-flex gap-4 justify-content-evenly'>
                            <a
                                href='/auth/login'
                                className='align-self-center text-white fw-bold text-decoration-none'
                                style={{ cursor: 'pointer' }}>Masuk</a>
                            <Navbar.Text className='text-white fw-bold'>
                                <button className='btn fw-bold bg-mang-light text-white'>
                                    <IconsFs.FaRightFromBracket /> Hubungi Kami
                                </button>
                            </Navbar.Text>
                            <PanelAuthIcon />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}