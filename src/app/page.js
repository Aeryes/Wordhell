import Head from 'next/head';
import Navbar from './navbar.js'
import Gameboard from './gameboard.js'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <h1 id="body-title-top">Wordhell</h1>
      <div id="game-section" className="text-center">
        <Gameboard></Gameboard>
      </div>
    </>
  );
}
