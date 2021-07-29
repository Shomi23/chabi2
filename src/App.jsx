import React from 'react';
import Navbar from './components/navbar/navbar'
import Home from './sections/home/home'
import Contact from './sections/contact/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import img1 from './assets/truck9.jpeg'
import './App.css';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="kontakt-wrapper">
        <div className="kontakt-div">
          <Contact />
        </div>
        <div className="info-wrapper">
        <div className="info-div">
          <div className="tr-quote">
            <h2>GET YOUR TRANSPORT QUOTE</h2>
            <p>
              Fill out the form to receive a quote in less than an hour. We cover every potential route. We ensure that your personal journey as well as your products are delivered safely and on time.
            </p>
          </div>
          <div className="contact-section">

            <div className="contact-block-item">
              <div className="icon">
                <FontAwesomeIcon  className="font-aws" icon={faBuilding} size="3x" style={{fill:"red"}} />
              </div>
              <div>
                <h2>TIMOK019 inc.</h2>
              </div>
            </div>


            <div className="contact-block-item">
              <div className="icon">
                <FontAwesomeIcon icon={faRoad} className="iconfa" size="3x" />
              </div>
              <div>
                <h2>5216s lockwood ave</h2>
                <h2>Chicago , IL 60638, USA </h2>
              </div>
            </div>


            <div className="contact-block-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} className="iconfa" size="3x" />
              </div>
              <div>
                <h2>+12028309765</h2>
              </div>
            </div>

            <div className="contact-block-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} className="iconfa" size="3x" />
              </div>
              <h2>customers@timok019.com</h2>
            </div>

          </div>
        </div>
        </div>
      </div>
      <div className="story-wrapper">
        <div className="info-div">

        </div>
        <div className="story-img">
          <img src={img1} alt="" />
        </div>
      </div>
      <p className="copyright">© 2020 TIMOK019</p>
    </div>
  );


}

export default App;
