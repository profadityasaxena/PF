import React from 'react';
import Image from 'next/image';
import logo from './assets/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src={logo}
        alt="Aditya Saxena"
        width={200}
        height={50}
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
