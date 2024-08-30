import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Dashboard = ({homeurl}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if a username is stored in local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear username from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <DashboardContainer>
      <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} homeurl={homeurl}/>
      <ContentContainer>
        <div style={{ flexGrow: 1, padding: '20px', backgroundColor: '#fafafa' }}>
          <Outlet />
        </div>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;