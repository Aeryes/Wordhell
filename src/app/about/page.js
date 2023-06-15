import Head from 'next/head';
import Navbar from '../navbar.js'

export default function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <h1 id="body-title-top">About</h1>
      <p id="body-game-desc-two">I created this version of The New York Times famous game 'Wordle' in order</p>
      <p id="body-game-desc-two">to challenge myself and to build my portfolio for employment purposes.</p>
      <p id="body-game-desc-two">If you like this game then go check out the original work by The New York Times.</p>
      <p id="body-game-desc-two"><a id="wordle-link" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a></p>

      <h2 id="body-title-top">How is this built?</h2>
      <p id="body-game-desc-two">This project uses the following technologies:</p>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <ul>
              <li id="list-style">React 18.2.0</li>
              <li id="list-style">Next.JS 13.4.5</li>
              <li id="list-style">MUI Material UI 5.13.5</li>
              <li id="list-style">MUI Material UI 5.3.0</li>
              <li id="list-style">EmailJS 3.11.0</li>
          </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}