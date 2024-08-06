import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 150px;
  padding: 10px;
  color: black; /* Set text color to black */
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ProfileMenu = ({ isLoggedIn, onLogout, closeMenu }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <MenuContainer ref={menuRef}>
      {!isLoggedIn ? (
        <>
          <Link to="/login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/create-user">
            <MenuItem>Create Account</MenuItem>
          </Link>
        </>
      ) : (
        <>
          <MenuItem>Profile Settings</MenuItem>
          <MenuItem onClick={onLogout}>Sign Out</MenuItem>
        </>
      )}
    </MenuContainer>
  );
};

export default ProfileMenu;