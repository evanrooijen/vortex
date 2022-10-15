import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { DarkMode } from '../components/DarkMode';

import '../styles/tailwind.css';

type BasePageProps = {
  dehydratedState: DehydratedState;
};

function CustomApp({ Component, pageProps }: AppProps<BasePageProps>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DarkMode>
          <Head>
            <title>Welcome to admin-panel!</title>
          </Head>
          <Component {...pageProps} />
        </DarkMode>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
