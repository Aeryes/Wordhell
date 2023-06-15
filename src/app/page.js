import Head from 'next/head';
import Navbar from './navbar.js'
import Gameboard from './gameboard.js'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4SRZPHFE2Q"></script>
      </Head>
      <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </div>
      <Navbar></Navbar>
      <h1 id="body-title-top">Wordhell</h1>
      <div id="game-section" className="text-center">
        <Gameboard></Gameboard>
      </div>
    </>
  );
}
