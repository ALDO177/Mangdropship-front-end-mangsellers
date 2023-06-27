'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { MangdropshipProviderAuth } from '@/Providers/MangdropshipAuthProviders';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
          <MangdropshipProviderAuth>
             {children}
             <ToastContainer/>
          </MangdropshipProviderAuth>
      </body>
    </html>
  )
}
