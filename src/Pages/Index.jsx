import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import Navbar from '../Components/Navbar';
import haroon3 from '../Assets/ProfileImage/haroon3.png'; // Import the fallback image
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Montserrat', sans-serif; /* Apply Montserrat here */
`;

const IntroText = styled.div`
  flex: 1;
  padding-right: 30px;

  h1 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #fad961, #f76b1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Montserrat', sans-serif; /* Apply Montserrat here */
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
    font-family: 'Montserrat', sans-serif; /* Apply Montserrat here */
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

const RoleText = styled.p`
  font-size: 1.5rem; /* Increased font size */
  font-weight: bold; /* Make it bold */
  color: #1de9b6; /* Color change for emphasis */
  text-transform: uppercase; /* Uppercase transformation */
  margin: 10px 0;
  letter-spacing: 1px; /* Slightly increased spacing between letters */
`;



const DescriptionText = styled.p`
  font-family: 'Montserrat', sans-serif; /* Apply Montserrat font */
  font-size: 1.2rem; /* Base font size */
  color: #000; /* Darker text color for better contrast */
  margin: 20px 0;
  line-height: 1.6; /* Increased line height for better readability */
  padding: 15px; /* Padding for breathing room */
   /* Smooth transitions */
  
  /* Eye-catching styles */
  font-weight: 500; /* Medium font weight */
  letter-spacing: 0.5px; /* Slightly increase letter spacing for clarity */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle text shadow for depth */

  

  /* Media queries for mobile responsiveness */
  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller font size for mobile */
    padding: 12px; /* Adjust padding for mobile */
    margin: 15px 0; /* Adjust margin for mobile */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Even smaller font size for very small screens */
    padding: 10px; /* Further adjust padding */
    margin: 10px 0; /* Further adjust margin */
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

const GradientButton = styled(Link)`
  background: linear-gradient(90deg, #1de9b6, #1dc4e9); /* Minty fresh gradient */
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s; /* Smooth transitions */
  text-decoration: none;

  &:hover {
    transform: scale(1.05); /* Slightly increase size on hover */
  }

  @media (max-width: 768px) {
    width: 90%;
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
    width: 90%;
    margin-top: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column; /* Ensure row layout */
  justify-content: center; /* Center social icons */
  margin-top: 20px;
  flex-wrap: wrap; /* Allow wrapping if necessary */
`;

const StyledIcon = styled.a`
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Center items vertically */
  margin: 10px 10px; /* Margin around the icons */
  font-size: 1.5rem;
  color: ${props => props.color || 'black'}; /* Default color is black */
  text-decoration: none; /* Remove underline from links */
  
  span {
    margin-left: 8px; /* Add space between icon and text */
    font-size: 1rem; /* Adjust text size */
    font-weight: 500; /* Medium font weight */
    color: inherit; /* Inherit color from parent */
    transition: color 0.3s ease; 
    letter-spacing: 1px;/* Smooth transition for text color */
  }

  &:hover {
    cursor: pointer; /* Change cursor on hover */
    color: #007bff; /* Change icon color on hover */
    
    span {
      color: #007bff; /* Change span text color on hover */
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

// Animation variants for framer-motion
const pageVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 100,
  },
};

const Index = () => {
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
      const response = await fetch(`http://ec2-13-126-99-50.ap-south-1.compute.amazonaws.com:8888/api/users/get/44200315`);
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

  // Function to download resume from server if available, else fallback to public resume
  const downloadResume = () => {
    if (resume && resume.length > 0) {
      const blob = new Blob([new Uint8Array(resume)], { type: resumeType });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'mohamed_haroon_resume_server.pdf'; // Change file name if required
      link.click();
    } else {
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // Make sure the resume is placed in the public folder
      link.download = 'mohamed_haroon_resume_asset.pdf';
      link.click();
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <Navbar email={email} phone="+91 9360984799" />
        <Content>
          <IntroText>
            <h1>Hey, I'm {name}</h1>
            <RoleText>{role}</RoleText>
            <DescriptionText>{about}</DescriptionText>

            <ButtonContainer>
              <GradientButton to="/contact">Contact Me</GradientButton>
              <ModernFlatButton onClick={downloadResume}>Download CV</ModernFlatButton>
            </ButtonContainer>
            <SocialIcons>
  <StyledIcon href="https://www.linkedin.com/in/mohamed-haroon-822703227/" target="_blank" color="#0072b1">
    <IoLogoLinkedin />
    <span>LinkedIn</span>
  </StyledIcon>
  <StyledIcon href="https://github.com/moharoon11?tab=repositories" target="_blank" color="#333">
    <IoLogoGithub />
    <span>Github</span>
  </StyledIcon>
  <StyledIcon href="https://leetcode.com/u/moharoon11107/" target="_blank" color="#FFA500">
    <SiLeetcode />
    <span>LeetCode</span>
  </StyledIcon>
  <StyledIcon href="https://www.instagram.com/_mohd.haroon/" target="_blank" color="#E1306C">
    <IoLogoInstagram />
    <span>Instagram</span>
  </StyledIcon>
</SocialIcons>

          </IntroText>
          <ImageSection>
            <img
              src={profileImage ? `data:${profileImageType};base64,${profileImage}` : fallbackProfileImage}
              alt="Profile"
            />
          </ImageSection>
        </Content>
      </Container>
    </motion.div>
  );
};

export default Index;
