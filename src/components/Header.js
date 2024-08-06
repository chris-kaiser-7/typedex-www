import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu';
import { FaUser } from 'react-icons/fa'; // Importing a person icon from react-icons

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0 auto;
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
`;

function generateColor(username) {
  // Simple hash function to create a color from the username
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00ffffff).toString(16).padStart(6, '0');
  return `#${color}`;
}

const Header = ({ isLoggedIn, username, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Title>Typedex</Title> {/* Adding the Typedex title */}
      <ProfileIcon onClick={toggleMenu} username={username}>
        {isLoggedIn ? username[0].toUpperCase() : <FaUser />} {/* Display username initial or person icon */}
        {menuOpen && (
          <ProfileMenu
            isLoggedIn={isLoggedIn}
            onLogout={onLogout}
            closeMenu={closeMenu} // Pass the closeMenu function
          />
        )}
      </ProfileIcon>
    </HeaderContainer>
  );
};

export default Header;