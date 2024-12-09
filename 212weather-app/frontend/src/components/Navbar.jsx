import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '15px 0',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  };

  const linkStyle = {
    margin: '0 15px',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/register" style={linkStyle}>Register</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
    </nav>
  );
};

export default Navbar;
