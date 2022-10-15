import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="min-h-full min-w-full">
      <Head />
      <body className="transition-colors duration-300 ease-linear dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
