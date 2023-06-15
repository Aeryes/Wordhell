import Head from 'next/head';
import Navbar from './navbar.js'
import Gameboard from './gameboard.js'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wordhell</title>
        <meta property="og:url"                content="https://www.wordhell.com" />
        <meta property="og:title"              content="Wordhell - Wordle Clone" />
        <meta property="og:description"        content="Can you guess the word?" />
        <meta property="og:image"              content="./favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4SRZPHFE2Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4SRZPHFE2Q');
        `}
      </Script>
      <Navbar></Navbar>
      <h1 id="body-title-top">Wordhell</h1>
      <div id="game-section" className="text-center">
        <Gameboard></Gameboard>
      </div>
    </>
  );
}
