
'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import logoMangSeller from '@/assets/images/logo-light.png';
import Image from 'next/image';
import * as IconsFs from 'react-icons/fa6';
import Script from 'next/script';

interface Props { cookies?: Cookies }
const WebAnimationBack = dynamic(() => import('@/component/Wave/WaveBackgroundAnimation'));
const PanelAuthIcon = dynamic(() => import('@/component/Navbar/PanelAuthIcon'));

export default function Home(props: Props) {
  return (
    <React.Fragment>
      <section className="header-main">
        <WebAnimationBack />
        <div className='position-absolute w-100 d-block' style={{ zIndex: 100, top: 0 }}>
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
                    <Navbar.Text className='align-self-center text-white fw-bold'>Masuk</Navbar.Text>
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
        </div>
      </section>
      <Script src='https://unpkg.com/react-popper/dist/index.umd.js'></Script>
    </React.Fragment>
  )
}
