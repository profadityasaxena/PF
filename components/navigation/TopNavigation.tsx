import React from 'react';
import Logo from './Logo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopNavigation = () => {
  return (
    <div style={{ zIndex: 9999 }} className="block fixed top-0 w-full h-[60px] bg-white flex items-center justify-between px-4 border-b border-gray-300">
      <div className="flex items-center">
        <Logo />
      </div>
      <nav className="flex space-x-4 text-sm items-center">
        <a href="/" className="hover:text-gray-600">
          <FontAwesomeIcon icon={faHome} />
        </a>
        
        <span className="text-gray-400">|</span>
        <a href="/contact" className="hover:text-gray-600">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <span className="text-gray-400">|</span>
        <a href="https://www.linkedin.com/in/itsadisxnn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          LinkedIn
        </a>
        <span className="text-gray-400">|</span>
        <a href="https://github.com/profadityasaxena" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          GitHub
        </a>
        <span className="text-gray-400">|</span>
        <a href="https://calendly.com/iam_adisxn/30min" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          Appointments
        </a>
      </nav>
    </div>
  );
};

export default TopNavigation;
