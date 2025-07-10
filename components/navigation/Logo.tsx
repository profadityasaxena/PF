import React from 'react';
import Image from 'next/image';
import logo from './assets/logo-1.png';

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src={logo}
        alt="Aditya Saxena"
        width={160}
        height={40}
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
