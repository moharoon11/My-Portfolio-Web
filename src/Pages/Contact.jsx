import React, { useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { IoMail, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import emailjs from '@emailjs/browser';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 50px 0;
  background-color: #f7f7f7; /* Light background for contrast */
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    resize: none; /* Prevent resizing */
  }

  input:focus, textarea:focus {
    border-color: #f76b1c; /* Highlight color */
    outline: none;
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

    &:hover {
      color: #f76b1c;
    }
  }
`;



function Contact() {
  const form = useRef(); // Create a reference to the form
  const email = "moharoon11107@gmail.com"; // Email for Navbar

  const sendEmail = (e) => {
    e.preventDefault();

    // Construct the message object to match the EmailJS template
    const messageData = {
      to_name: "Mohamed Haroon", // The recipient's name
      from_name: form.current.user_name.value, // Get user name from form input
      from_email: form.current.user_email.value, // Get user email from form input
      message: form.current.message.value, // Get message from form input
    };

    emailjs.send('service_punaynd', 'template_mqg67y9', messageData, 'khrPbhqVPxV-12t2f')
      .then(() => {
        alert("Email sent successfully!");
        console.log('SUCCESS!');
        e.target.reset(); // Reset the form after successful submission
      }, (error) => {
        alert("Failed to send email! Please try again later.");
        console.error('FAILED...', error.text);
      });
  };

  return (
    <Container>
      <Navbar email={email} phone="91+ 9360984799"/>
      <Content>
        <Title>Contact Me</Title>
        <Form ref={form} onSubmit={sendEmail}> {/* Use ref for the form */}
          <label>Your Name</label>
          <input type="text" name="user_name" required />
          <label>Your Email</label>
          <input type="email" name="user_email" required />
          <label>Your Message</label>
          <textarea name="message" rows="13" required />
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
      </Content>
   
    </Container>
  );
}

export default Contact;
