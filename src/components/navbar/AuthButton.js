import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AuthButton = ({ isLoggedIn, onLogout }) => {
  const [isLoggedInState, setIsLoggedIn] = useState(isLoggedIn);


  const myStyle = {
    background: 'white',
    color: '#2874f0',
    width: '120px',
    height: '30px',
    border: 'none',
    marginRight: '3px',
  };

  useEffect(() => {
    // Check if user is logged in after component mounts
    const userData = localStorage.getItem('userData');
    if (userData) {
      setIsLoggedIn(true);
    }
  },);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    onLogout();
  };

  if (isLoggedInState) {
    return (
      <button style={myStyle} variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </button>
    );
  } else {
    return (
      <Link to="/loginmain">
        <button style={myStyle} variant="contained" color="primary">
          Login
        </button>
      </Link>
    );
  }
};

export default AuthButton;


