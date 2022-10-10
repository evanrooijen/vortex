import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='dark:bg-slate-900 transition-colors duration-300 ease-linear'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}