import Head from 'next/head';
import Navbar from './navbar.js'

export default function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <h1 id="body-title-top">Error 404. Page Not Found.</h1>
    </>
  );
}