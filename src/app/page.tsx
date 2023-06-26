
'use client';
import { CookiesProvider, Cookies } from 'react-cookie';

interface Props{
  cookies?: Cookies
}

export default function Home(props: Props) {
  const cookies=  new Cookies;
  return (
    <CookiesProvider>
        <h1>Indexx</h1>
    </CookiesProvider>
  )
}
