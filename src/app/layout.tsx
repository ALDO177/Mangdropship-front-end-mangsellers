'use client';

import type { AppProps } from 'next/app';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../../styles/layout/layout.scss';
import '../../styles/demo/Demos.scss';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

type Props = AppProps & {
  children?: React.ReactNode
};

import { MangdropshipProviderAuth } from '@/Providers/MangdropshipAuthProviders';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'react-bootstrap';

export default function RootLayout({ children, pageProps }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Mangdropship Sellers</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Mangdropship Seller"></meta>
        <meta property="og:url" content="https://www.primefaces.org/sakai-react"></meta>
        <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
        <meta property="og:image" content="https://www.primefaces.org/static/social/sakai-nextjs.png"></meta>
        <meta property="og:ttl" content="604800"></meta>
        <link rel="icon" href={`/favicon.ico`} type="image/x-icon"></link>
        <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
      </head>
      <body>
        <MangdropshipProviderAuth>
          <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs">
            {children}
            <ToastContainer />
          </ThemeProvider>
        </MangdropshipProviderAuth>
      </body>
    </html>
  )
}
