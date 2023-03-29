import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>
}
