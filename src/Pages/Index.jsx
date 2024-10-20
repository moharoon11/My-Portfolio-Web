import React from 'react';
import styled from 'styled-components';
import haroon1 from '../Assets/haroon1.png';
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Navbar = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;

  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
      color: #f77;
    }
  }

  @media (max-width: 768px) {
    nav a {
      margin: 0 10px;
      font-size: 0.9rem;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IntroText = styled.div`
  flex: 1;
  padding-right: 30px;

  h1 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #fad961, #f76b1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ContactButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    margin: 0 10px;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;

    &:hover {
      color: #f76b1c;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

function App() {
  return (
    <Container>
      <Navbar>
        <Logo>HAROON</Logo>
        <nav>
          <a href="#home">Portfolio</a>
          <a href="#about">Skills</a>
          <a href="#works">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </Navbar>

      <Content>
        <IntroText>
          <h1>Hey, I'm Mohammed Haroon</h1>
          <p>
            A 2023 Graduate Bsc Information Technology Passionalte about java and full stack development
          </p>
          <ContactButton>Contact me</ContactButton>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/mohamed-haroon-822703227/" target="_blank"><IoLogoLinkedin /></a>
            <a href="https://github.com/moharoon11" target="_blank"><IoLogoGithub /></a>
            <a href="https://www.instagram.com/_mohd.haroon/" target="_blank"><IoLogoInstagram /></a>
          </SocialIcons>
        </IntroText>

        <ImageSection>
          <img src={haroon1} alt="Abo the designer" />
        </ImageSection>
      </Content>
    </Container>
  );
}

export default App;
