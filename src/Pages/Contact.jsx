import React, { useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { IoMail, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import contactImage from '../Assets/contact.avif';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px; /* Increased max-width for larger screens */
  width: 100%;
  margin: 50px 0;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensure no overflow for rounded corners */
  
  @media (min-width: 768px) {
    flex-direction: row; /* Split layout for larger screens */
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Default height for the image container */

  @media (min-width: 768px) {
    height: 100%;
  }

  /* Added styles for mobile responsiveness */
  @media (max-width: 767px) {
    height: 200px; /* Adjust height for mobile screens */
    width: 100%;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto; /* Keep aspect ratio */
  height: auto; /* Keep aspect ratio */
  border-radius: 10px; /* Optional: Rounded corners */
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media (min-width: 768px) {
    padding: 50px; /* More padding for larger screens */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #fad961, #f76b1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input, textarea {
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    resize: none;
    background-color: #f7f7f7;
    transition: border-color 0.2s;

    &:focus {
      border-color: #f76b1c;
      outline: none;
    }
  }

  textarea {
    height: 150px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #ffcc00, #f77);
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
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
    transition: color 0.2s;

    &:hover {
      color: #f76b1c; 
    }

    &:nth-child(1) { color: #0077b5; } /* LinkedIn */
    &:nth-child(2) { color: #333; } /* GitHub */
    &:nth-child(3) { color: #e4405f; } /* Instagram */
    &:nth-child(4) { color: #d14836; } /* Mail */
  }
`;

function Contact() {
  const form = useRef(); 
  const email = "moharoon11107@gmail.com"; 

  const sendEmail = (e) => {
    e.preventDefault();

    const messageData = {
      to_name: "Mohamed Haroon",
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs.send('service_punaynd', 'template_mqg67y9', messageData, 'khrPbhqVPxV-12t2f')
      .then(() => {
        alert("Email sent successfully!");
        console.log('SUCCESS!');
        e.target.reset();
      }, (error) => {
        alert("Failed to send email! Please try again later.");
        console.error('FAILED...', error.text);
      });
  };

  return (
    <Container>
      <Navbar email={email} phone="91+ 9360984799"/>
      <Content>
        <ImageWrapper>
          <StyledImage src={contactImage} alt="Contact" />
        </ImageWrapper>
        <FormContainer>
          <Title>Contact Me</Title>
          <Form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" required />
            <label>Your Email</label>
            <input type="email" name="user_email" required />
            <label>Your Message</label>
            <textarea name="message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/mohamed-haroon-822703227/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/moharoon11" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
            <a href="https://www.instagram.com/_mohd.haroon/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
            <a href="mailto:moharoon11107@gmail.com" target="_blank" rel="noopener noreferrer">
              <IoMail />
            </a>
          </SocialIcons>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default Contact;
