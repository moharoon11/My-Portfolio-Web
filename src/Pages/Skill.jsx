import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';

// Styled components
const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 2rem auto;
  width: 90%;
  padding: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const SkillName = styled.h2`
  font-size: 1.8rem;
  color: #333;
  background: linear-gradient(90deg, #f76b1c, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const SourceLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function Skill() {
  const [skillSet, setSkillSet] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/skills/getAll/44200315`);
      const data = await response.json();
      const skillsWithIcons = await Promise.all(
        data.map(async (skill) => {
          const iconUrl = await fetchIcon(skill.skillName);  // Fetch the icon for each skill
          return { ...skill, iconUrl };
        })
      );
      setSkillSet(skillsWithIcons);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIcon = async (skillName) => {
    // Using devicon as an example. Devicon icons are available in this format.
    try {
      const formattedSkillName = skillName.toLowerCase().replace(/\s+/g, '');
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formattedSkillName}/${formattedSkillName}-original.svg`;
    } catch (error) {
      console.error(`Error fetching icon for ${skillName}:`, error);
      return null;  // Return null if the icon is not found
    }
  };

  return (
    <>
      <Navbar email="moharoon11107@gmail.com" />
      <SkillContainer>
        {skillSet.map((skill, index) => (
          <SkillCard
            key={skill.skillId}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill.iconUrl && <SkillIcon src={skill.iconUrl} alt={`${skill.skillName} icon`} />}
            <SkillName>{skill.skillName}</SkillName>
            {skill.sourceLink && (
              <SourceLink href={skill.sourceLink} target="_blank" rel="noopener noreferrer">
                Learn more
              </SourceLink>
            )}
          </SkillCard>
        ))}
      </SkillContainer>
    </>
  );
}

export default Skill;
