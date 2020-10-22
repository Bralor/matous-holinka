import './App.css';
import './components/myStyles.css';
import React from 'react';
import logo from "./matous_nepal.jpg";
import styled from "styled-components";

const Container = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`;

const Technologies = styled.b`
  font-size: 1.5em;
`;

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
                <p>Nav</p>
              </div>

              <div className="left-column">
                <img src={logo} className="profile-picture" />
                <h5 className="header-5">Personalize theme</h5>

                <div className="theme-option-wrapper">
                  <div className="theme-dot" id="light-mode"></div>
                  <div className="theme-dot" id="dark-mode"></div>
                </div>

                <p id="settings-note">*Theme setting will be saved for your next visit</p>

              </div>
              <div className="right-column">
                Right Column
              </div>

            </div>
          </div>
        </section>
        
          <Container>
              <p>
                  Just a small, weird fella from Brno.
              </p>
              <p>
                  More about me...
              </p>

              <Technologies>
                  Python, Django, JavaScript, React, HTML/CSS, Docker, Test automation
              </Technologies>
          </Container>
      </body>
    </>
  );
}

export default LandingPage;

