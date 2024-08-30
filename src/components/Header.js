//header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #333;
  z-index: 1; /* Ensure title stays behind nav links */
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  z-index: 2; /* Ensure nav links are clickable */
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 40px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 5px 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  &:hover {
    border-color: #007bff;
    color: #007bff;
  }
  z-index: 3; 
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ username }) => (username ? generateColor(username) : '#333')};
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1; /* Ensure profile icon does not overlap with nav */
`;

function generateColor(username) {
  let hash = 0;
  for (let i = 0; username && i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00ffffff).toString(16).padStart(6, '0');
  return `#${color}`;
}

const Header = ({ isLoggedIn, username, onLogout, homeurl }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <TitleLink to={homeurl}>
        <Title>Typedex</Title> {/* The title is aligned to the left */}
      </TitleLink>
      <NavWrapper>
        <NavContainer>
          <NavLink to="/">Trees</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/assistants">Assistants</NavLink>
        </NavContainer>
      </NavWrapper>
      <ProfileIcon onClick={toggleMenu} username={username}>
        {isLoggedIn ? username[0].toUpperCase() : <FaUser />} {/* Display username initial or person icon */}
        {menuOpen && (
          <ProfileMenu
            isLoggedIn={isLoggedIn}
            onLogout={onLogout}
            closeMenu={closeMenu}
          />
        )}
      </ProfileIcon>
    </HeaderContainer>
  );
};

export default Header;
