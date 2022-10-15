import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import DarkModeContext, { DarkModeType } from '../components/DarkModeContext';

import '../styles/tailwind.css';

type BasePageProps = {
  dehydratedState: DehydratedState;
};

function CustomApp({ Component, pageProps }: AppProps<BasePageProps>) {
  const [queryClient] = useState(() => new QueryClient());

  const isBrowserDefaultDark = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
  };

  const [theme, setTheme] = useState<DarkModeType>('dark');

  useEffect(() => {
    const storedTheme = window.sessionStorage.getItem(
      'vortex_theme'
    ) as DarkModeType;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(isBrowserDefaultDark() ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      window.sessionStorage.setItem('vortex_theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.sessionStorage.setItem('vortex_theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DarkModeContext.Provider value={{ theme, setTheme }}>
          <Head>
            <title>Welcome to admin-panel!</title>
          </Head>
          <Component {...pageProps} />
        </DarkModeContext.Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
