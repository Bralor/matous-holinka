import './App.css';
import './components/myStyles.css';
import React from 'react';
import logo from "./matous_nepal.jpg";

function LandingPage() {
return (
    <>
      <head>
          <title>Hello, my name is Matous</title>
      </head>

      <body>
        <section className="section-1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Matous Holinka</h1>
            </div>

            <div className="intro-wrapper">

              <div className="nav-wrapper">
                <p>About me</p>
              </div>

              <div className="left-column">
                <img src={logo} className="profile-picture" alt="matous_nepal"/>
                <h5 className="header-5">Personalize theme</h5>

                <div className="theme-option-wrapper">
                  <div className="theme-dot" id="light-mode"></div>
                  <div className="theme-dot" id="dark-mode"></div>
                </div>

                <p id="settings-note">*Theme setting will be saved for your next visit</p>

              </div>
              <div className="right-column">
                <div id="preview">
                  <h5>What I do</h5>
                  <ul>
                    <li>test automation enginner in an association NIC.cz</li>
                    <li>lecturer of Pythons courses</li>
                    <li>other own projects</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default LandingPage;

