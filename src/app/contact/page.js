'use client'

import Head from 'next/head';
import Navbar from '../navbar.js';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Script from 'next/script'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_frcvkk6', 'template_kytdy9f', form.current, 'QbIhB9eq3cPoLTLyz')
      .then((result) => {
          console.log(result.text);
          // Reset the form.
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <h1 id="body-title-top">Contact</h1>
      <p id="contact-desc-one">If you have any questions about this web application feel free to fill out the form below and I will reach out to you as soon as possible.</p>
      <p id="contact-desc-one">You can also click on the images at the bottom of the page to see more of my work and background.</p>
      <div id="top-section">
        <form id='contact-form-desc' ref={form} onSubmit={sendEmail}>
          <div id="form-section" className="row mx-auto">
            <div id="col-form" className="col-auto mx-auto">
              <label>Name</label>
              <input id="input-box" type="text" name="user_name" className="form-control"/>
            </div>
          </div>
          <div id="form-section" className="row mx-auto">
            <div id="col-form" className="col-auto mx-auto">
              <label>Email</label>
              <input id="input-box" type="email" name="user_email" className="form-control"/>
            </div>
          </div>
          <div id="form-section" className="row mx-auto">
            <div id="col-form" className="col-auto mx-auto">
              <label>Message</label>
              <textarea id="input-box" name="message" className="form-control"/>
            </div>
          </div>
          <input id="form-submit" className="btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
      <div className="container">
        <div id="social-links" className="row mx-auto">
          <div id="social-form" className="col-auto mx-auto"></div>
          <div id="social-form" className="col-auto mx-auto"></div>
          <div id="social-form" className="col-auto mx-auto">
          <a href="https://www.linkedin.com/in/dylan-carty-b98045147/"><img id="social-image" src='./images/linkedin.png'></img></a>
          </div>
          <div id="social-form" className="col-auto mx-auto">
          <a href="https://github.com/Aeryes?tab=repositories"><img id="social-image" src='./images/github.png'></img></a>
          </div>
          <div id="social-form" className="col-auto mx-auto"></div>
          <div id="social-form" className="col-auto mx-auto"></div>
        </div>
      </div>
    </>
  );
}