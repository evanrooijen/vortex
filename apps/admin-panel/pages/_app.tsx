import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import DarkModeContext, { DarkModeType } from '../components/DarkModeContext';

import '../styles/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  

  const isBrowserDefaultDark = () => {
    if(typeof window === 'undefined') {
      return false
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
  } 

  const [theme, setTheme] = useState<DarkModeType>('dark');

  useEffect(() => {
    setTheme(isBrowserDefaultDark() ? 'dark': 'light')
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  return (
    <>
      <DarkModeContext.Provider value={{theme, setTheme}}>
        <Head>
          <title>Welcome to admin-panel!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </DarkModeContext.Provider>
    </>
  );
}

export default CustomApp;
