'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { MangdropshipProviderAuth } from '@/Providers/MangdropshipAuthProviders';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'react-bootstrap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
