import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import Navbar from '../Components/Navbar';
import haroon3 from '../Assets/ProfileImage/haroon3.png'; // Import the fallback image
import {Link} from 'react-router-dom';

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const GradientButton = styled.button`
  background: linear-gradient(90deg, #ffcc00, #f77); /* Gradient effect */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s; /* Smooth transitions */

  &:hover {
    transform: scale(1.05); /* Slightly increase size on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;

const OutlinedButton = styled(Link)`
  background-color: transparent;
  color: #000;
  border: 2px solid #000; /* Border color */
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s; /* Smooth transitions */

  &:hover {
    background-color: #000; /* Dark background on hover */
    color: #fff; /* Change text color on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;

const ModernFlatButton = styled.button`
  background-color: #007bff; /* Primary color */
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 30px; /* More rounded corners */
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2); /* Subtle shadow for depth */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transitions */
  margin-left: 10px;

  &:hover {
    background-color: #0056b3; /* Darker shade for hover */
    transform: translateY(-2px); /* Lift effect on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
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

function Index() {
  const [name, setName] = useState("Mohamed Haroon");
  const [about, setAbout] = useState("A recent IT graduate with a strong passion for Java and full-stack development.");
  const [email, setEmail] = useState("moharoon11107@gmail.com");
  const [role, setRole] = useState("FRESHER | JAVA DEVELOPER");

  const [profileImage, setProfileImage] = useState(null);
  const [profileImageType, setProfileImageType] = useState("");

  const fallbackProfileImage = haroon3; // Use imported image as fallback

  const [resume, setResume] = useState([]);
  const [resumeType, setResumeType] = useState("");

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/users/get/${44200315}`);
      const data = await response.json();

      setName(data.name);
      setAbout(data.about);
      setEmail(data.email);
      setRole(data.role);
      setProfileImage(data.userImage1);
      setProfileImageType(data.userImage1Type);
      setResume(data.resume);
      setResumeType(data.resumeType);
    } catch (error) {
      console.log("Failed to fetch data from the server");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <Navbar email={email} phone="+91 9360984799"/>
      <Content>
        <IntroText>
          <h1>Hey, I'm {name}</h1>
          <p>{role}</p>
          <p>{about}</p>

          {/* Button container to make them side by side */}
          <ButtonContainer>
            <OutlinedButton>View CV</OutlinedButton>
            <ModernFlatButton>Download CV</ModernFlatButton>
          </ButtonContainer>

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
            <a href="https://leetcode.com/u/moharoon11107/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </SocialIcons>
        </IntroText>

        <ImageSection>
          {
            profileImage ? (
              <img src={`data:${profileImageType};base64,${profileImage}`} alt="Profile from server" />
            ) : (
              <img src={fallbackProfileImage} alt="Fallback Profile" />
            )
          }
        </ImageSection>
      </Content>
    </Container>
  );
}

export default Index;
