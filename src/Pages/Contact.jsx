import React, { useEffect, useState } from 'react';
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
  const [email, setEmail] = useState("moharoon11107@gmail.com");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Failed to send email. Error:', error);
      });
  };

  return (
    <Container>
      <Navbar email={email} />
      <Content>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
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
