import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

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

function Project() {
  const [projects, setProjects] = useState([]);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://localhost:8888/api/projects/user/44200315`); // Replace with actual userId
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar email="moharoon11107@gmail.com" phone="91+ 9360984799"/>
      <ProjectContainer>
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
                src={`data:${project.imageType};base64,${project.imageDate}`}
                alt={project.imageName}
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
    </div>
  );
}

export default Project;
