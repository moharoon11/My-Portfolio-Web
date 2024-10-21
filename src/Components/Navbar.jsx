import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const NavContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
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
  margin-left: 20px;
  display: inline-block;

  &:hover {
    background-color: #f77 !important;
    color: #000 !important;
  }
`;

const NavButton = styled(Link)`
  padding: 10px;
  margin: 5px 0;
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

function Navbar({ email }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Logo>{email}</Logo>
        {/* Toggle button to open/close the nav items on mobile */}
       
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
