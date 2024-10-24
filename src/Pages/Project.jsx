import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

import admindashboard from '../Assets/ProjectImage/admindashboard.png';
import amazonui from '../Assets/ProjectImage/amazonui.png';
import bloggingproject from '../Assets/ProjectImage/bloggingproject.jpg';
import currencyconvertor from '../Assets/ProjectImage/currencyconvertor.png';
import portfolioapiimage from '../Assets/ProjectImage/PortfolioAPIImage.png';
import productimage from '../Assets/ProjectImage/prductImage.jpg';
import recipeimage from '../Assets/ProjectImage/recipe.png';
import socialmediawebimage from '../Assets/ProjectImage/socialmediaweb.png';
import youtubecloneimage from '../Assets/ProjectImage/youtubeclone.png';
import enotesimage from '../Assets/ProjectImage/notesproject.jpeg';


// Styled Components for mobile responsiveness and animations
const ProjectContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
`;

const ProjectList = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  padding: 0 1rem;
  margin-bottom: 1rem;
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const ProjectLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ProjectLinkButton = styled(motion.a)`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const hardcodedProjects = [
   {
    projectId: 1, 
    projectName: 'Portfolio Management API', 
    projectDescription: 'The Portfolio Management API is a comprehensive solution developed using Spring Boot, designed to empower users in managing their professional profiles. This API', 
    projectImage: portfolioapiimage,
    codeLink: 'https://github.com/moharoon11/PortfolioManagementAPI',
    liveLink: ''
  },
   {
     projectId: 2,
     projectName: 'Blogging API', 
     projectDescription: 'The Blogging API is a robust solution built with Spring Boot, designed to provide users with a seamless platform for creating and managing blog content. Leveraging Spring Security with JWT', 
     projectImage: bloggingproject,
     codeLink: 'https://github.com/moharoon11/Blogging_API',
     liveLink: ''
    },
   {
    projectId: 3, 
    projectName: 'Product Management API', 
    projectDescription: 'The Product Management API is a powerful backend solution built with Spring Boot to help users manage their products easily. It allows users to perform CRUD (Create, Read, Update, Delete',
    projectImage: productimage,
    codeLink: 'https://github.com/moharoon11/ProductManagementAPI',
    liveLink: ''
    },
   {
    projectId: 4, 
    projectName: 'Youtube-Clone', 
    projectDescription: 'A YouTube clone built with React that fetches data from an API to display videos seamlessly on the web.', 
    projectImage: youtubecloneimage,
    codeLink: 'https://github.com/moharoon11/React-Youtube-clone',
    liveLink: 'https://whimsical-peony-390a65.netlify.app/'
  },
   {
    projectId: 5, 
    projectName: 'Recipe App', 
    projectDescription: 'A web application that displays a variety of recipes to users based on their search and selected categories, using an API to fetch data.', 
    projectImage: recipeimage,
    codeLink: 'https://github.com/moharoon11/ReactRecipe',
    liveLink: 'https://transcendent-gnome-9d81b2.netlify.app/'
  },
   {
    projectId: 6, 
    projectName: 'ENotes Web App', 
    projectDescription: 'An eNotes web application developed using Servlets, JSP, JDBC, and MySQL, allowing users to register, log in, and create, read, update, and delete notes."', 
    projectImage: enotesimage,
    codeLink: 'https://github.com/moharoon11/ENotes-Web-App',
    liveLink: ''
  },
   {
    projectId: 7, 
    projectName: 'CurrencyConvertor', 
    projectDescription: 'A web application built with JavaScript that converts and displays currency values between different countries.', 
    projectImage: currencyconvertor,
    codeLink: 'https://github.com/moharoon11/CurrencyConvertor',
    liveLink: 'https://shimmering-ganache-2ce39e.netlify.app/'
  },
   {
    projectId: 8, 
    projectName: 'Amazon UI Clone', 
    projectDescription: 'Built with HTML and CSS', 
    projectImage: amazonui,
    codeLink: 'https://github.com/moharoon11/Amazon-UI-',
    liveLink: 'https://exquisite-trifle-34368a.netlify.app/'
  },
   {
     projectId: 9, 
     projectName: 'Social Media Web UI',
     projectDescription: 'Built by html, css and javascript for dom manipulation', 
     projectImage: socialmediawebimage,
     codeLink: 'https://github.com/moharoon11/Social-Media-Web',
     liveLink: 'https://strong-cuchufli-817bd1.netlify.app/'
    },
   {
    projectId: 10, 
    projectName: 'Admin Dashboard UI', 
    projectDescription: 'Dashboard UI built with html and css', 
    projectImage: admindashboard,
    codeLink: 'https://github.com/moharoon11/Responsive-Admin-Dashboard',
    liveLink: 'https://ephemeral-alpaca-cf694b.netlify.app/'
  },
]

function Project() {
  const [projects, setProjects] = useState([]);


  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://ec2-13-126-99-50.ap-south-1.compute.amazonaws.com:8888/api/projects/user/44200315`); // Replace with actual userId
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setProjects(hardcodedProjects);
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
       
       <ProjectContainer>
       <Navbar email="moharoon11107@gmail.com" phone="91+ 9360984799"/>
        <h2>My Projects</h2>
        <ProjectList>
  {projects.map((project) => (
    <ProjectCard
      key={project.projectId}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectImage
        src={project.imageDate 
              ? `data:${project.imageType};base64,${project.imageDate}`  // API image case
              : project.projectImage                                    // Hardcoded asset image
        }
        alt={project.imageName || project.projectName}   // Fallback for alt if imageName is missing
      />
      <ProjectTitle>{project.projectName}</ProjectTitle>
      <ProjectDescription>{project.projectDescription}</ProjectDescription>
      <ProjectLinks>
        {project.liveLink && (
          <ProjectLinkButton
            href={project.liveLink}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </ProjectLinkButton>
        )}
        {project.codeLink && (
          <ProjectLinkButton
            href={project.codeLink}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </ProjectLinkButton>
        )}
      </ProjectLinks>
    </ProjectCard>
  ))}
</ProjectList>

      </ProjectContainer>
    </>
     
     
    
  );
}

export default Project;
