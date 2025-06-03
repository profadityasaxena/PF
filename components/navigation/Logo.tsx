import React from 'react';
import logo from './assets/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo.src} alt="Aditya Saxena" height="50px" className="logo-image" />
    </div>
  );
};

export default Logo;
