import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import java from '../Assets/Icons/java.png';
import jdbc from '../Assets/Icons/jdbc.png';
import servletjsp from '../Assets/Icons/servletjsp.png';
import hibernate from '../Assets/Icons/hibernate.svg';
import spring from '../Assets/Icons/spring.svg';
import html from '../Assets/Icons/html.png';
import css from '../Assets/Icons/css.png';
import javascript from '../Assets/Icons/javascript.png';
import react from '../Assets/Icons/react.png';
import dsa from '../Assets/Icons/dsa.png';

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 3rem auto;
  padding: 20px;
  width: 90%;
  justify-content: center;
  flex-grow: 1;  // Ensures the grid takes up the remaining space
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  background: linear-gradient(145deg, #f0f0f0, #e0e0e0);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

const SkillName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
`;

const SourceLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 15px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
  }
`;

const SkillIcon = styled(motion.img)`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
`;

// Footer to fill the bottom empty space
const Footer = styled.footer`
  padding: 20px;
  background: #f8f9fa;
  text-align: center;
  font-size: 1rem;
  color: #888;
  margin-top: auto;
`;

// Card entry animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Hardcoded skills data
const hardcodedSkills = [
  { skillId: 1, skillName: 'Java', skillIcon: java, sourceLink: 'https://github.com/moharoon11/CoreJavaPrograms' },
  { skillId: 2, skillName: 'JDBC', skillIcon: jdbc, sourceLink: 'https://github.com/moharoon11/JdbcAppForEmployee' },
  { skillId: 3, skillName: 'Servlet & JSP', skillIcon: servletjsp, sourceLink: 'https://github.com/moharoon11/ENotes-Web-App' },
  { skillId: 4, skillName: 'Hibernate', skillIcon: hibernate, sourceLink: '' },
  { skillId: 5, skillName: 'Spring Boot', skillIcon: spring, sourceLink: 'https://github.com/moharoon11/Blogging_API' },
  { skillId: 6, skillName: 'Data Structures & Algorithms', skillIcon: dsa, sourceLink: 'https://leetcode.com/u/moharoon11107/' },
  { skillId: 7, skillName: 'HTML', skillIcon: html, sourceLink: 'https://github.com/moharoon11/Smart_City' },
  { skillId: 8, skillName: 'CSS', skillIcon: css, sourceLink: 'https://github.com/moharoon11/Social-Media-Web' },
  { skillId: 9, skillName: 'JavaScript', skillIcon: javascript, sourceLink: '' },
  { skillId: 10, skillName: 'React', skillIcon: react, sourceLink: 'https://github.com/moharoon11/React-Youtube-clone' },
];

function Skill() {
  const [skillSet, setSkillSet] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch(`http://ec2-13-126-99-50.ap-south-1.compute.amazonaws.com:8888/api/skills/getAll/44200315`);
      const data = await response.json();
      if (data.length > 0) {
        setSkillSet(data.map(skill => ({
          ...skill,
          skillIcon: `data:${skill.iconType};base64,${skill.skillIcon}`, // Use base64 for API icons
        })));
      } else {
        setSkillSet(hardcodedSkills); // Use hardcoded skills if API returns no skills
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
      setSkillSet(hardcodedSkills); // Use hardcoded skills on error
    }
  };

  return (
    <PageWrapper>
      <Navbar email="moharoon11107@gmail.com" phone="91+ 9360984799"/>
      <SkillContainer>
        {skillSet.map((skill, index) => (
          <SkillCard
            key={skill.skillId}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillIcon
              src={skill.skillIcon} // Use the base64 icon or hardcoded path
              alt={`${skill.skillName} icon`}
              whileHover={{ scale: 1.2 }} // Hover animation
            />
            <SkillName>{skill.skillName}</SkillName>
            {skill.sourceLink && (
              <SourceLink href={skill.sourceLink} target="_blank" rel="noopener noreferrer">
                Learn more
              </SourceLink>
            )}
          </SkillCard>
        ))}
      </SkillContainer>
      <Footer>
        © 2024 Mohamed Haroon - All Rights Reserved
      </Footer>
    </PageWrapper>
  );
}

export default Skill;
