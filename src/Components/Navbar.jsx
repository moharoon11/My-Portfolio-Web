import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons

// Styled Components
const NavContainer = styled.header`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; // Align items to the left on mobile
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; // Stack logo and icons vertically
    align-items: flex-start; // Align to the start
    margin-bottom: 10px; // Add some spacing below
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  svg {
    margin-right: 5px;
    color: #ff9900;  // Icon color
  }

  span {
    font-size: 1.0rem;
    font-weight: bold;
    color: #333;  // Updated text color
  }

  @media (max-width: 768px) {
    margin-right: 0; // Remove right margin on mobile
    margin-bottom: 5px; // Add bottom margin for spacing
  }
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background-color: white;
    position: relative;
    padding-top: 10px;
  }

  a {
    margin: 0 15px;
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
      color: #f77;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

const ContactLink = styled(Link)`
  padding: 8px 16px;
  background-color: #ffcc00;
  color: white;
  border-radius: 25px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  display: inline-block;

  &:hover {
    background-color: #f77 !important;
    color: #000 !important;
  }
`;

const NavButton = styled(Link)`
  padding: 10px;
  margin: 5px auto;
  background-color: #ffcc00;
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 60%; /* Make buttons full width */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #f77 !important;
    color: #000 !important;
  }

  @media (min-width: 769px) {
    display: none; /* Hide on larger screens */
  }
`;

function Navbar({ email, phone }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <LogoContainer>
          <IconTextWrapper>
            <FaEnvelope />
            <span>{email}</span>
          </IconTextWrapper>
          <IconTextWrapper>
            <FaPhoneAlt />
            <span>{phone}</span>
          </IconTextWrapper>
        </LogoContainer>
        
        <NavLinks isOpen={isOpen}>
          <Link to="/">Portfolio</Link>
          <Link to="/skill">Skills</Link>
          <Link to="/project">Project</Link>
          <ContactLink to="/contact">Contact</ContactLink>
        </NavLinks>
      </NavContainer>

      {/* Mobile Responsive Buttons */}
      <NavButton to="/" isOpen={isOpen}>Portfolio</NavButton>
      <NavButton to="/skill" isOpen={isOpen}>Skills</NavButton>
      <NavButton to="/project" isOpen={isOpen}>Project</NavButton>
      <NavButton to="/contact" isOpen={isOpen}>Contact</NavButton>
    </>
  );
}

export default Navbar;
