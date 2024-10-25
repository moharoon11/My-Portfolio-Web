import React, { useRef, useState } from 'react';
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
  max-width: 1200px;
  width: 100%;
  margin: 50px 0;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (max-width: 767px) {
    height: 200px;
    width: 100%;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media (min-width: 768px) {
    padding: 50px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #f76b1c;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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

const MessageStatus = styled.p`
  color: ${({ isSuccess }) => (isSuccess ? 'green' : 'red')};
  font-size: 1.1rem;
  margin-top: 10px;
  text-align: center;
`;

function Contact() {
  const form = useRef(); 
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(''); // New state for status message
  const [isSuccess, setIsSuccess] = useState(false); // To indicate if the submission was successful

  const email = "moharoon11107@gmail.com"; 

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const messageData = {
      to_name: "Mohamed Haroon",
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      message: form.current.message.value,
    };
  
    emailjs.send('service_punaynd', 'template_mqg67y9', messageData, 'khrPbhqVPxV-12t2f')
      .then(() => {
        setLoading(false); // Stop loading after successful submission
        setMessageStatus('Email sent successfully!'); // Show success message
        setIsSuccess(true);
        e.target.reset(); // Reset the form after submission
      })
      .catch((error) => {
        setLoading(false); // Stop loading if there's an error
        setMessageStatus('Failed to send email! Please try again later.'); // Show error message
        setIsSuccess(false);
      });

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  return (
    <>
      
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
           <SubmitButton type="submit">
             {loading ? <Loader /> : "Send Message"}
           </SubmitButton>
         </Form>
         {messageStatus && (
           <MessageStatus isSuccess={isSuccess}>
             {messageStatus}
           </MessageStatus>
         )}
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
    </>
   
  );
}

export default Contact;
