'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopNavigation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    message: '',
    location: ''
  });

  useEffect(() => {
    if (showPopup && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
          setFormData((prev) => ({ ...prev, location: coords }));
        },
        () => {
          console.warn("Geolocation could not be retrieved... It may be blocked by the browser or user settings.");
        }
      );
    }
  }, [showPopup]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body =
      `First Name: ${formData.firstName}%0D%0A` +
      `Last Name: ${formData.lastName}%0D%0A` +
      `Gender: ${formData.gender}%0D%0A` +
      `Email: ${formData.email}%0D%0A` +
      `Phone: ${formData.phone}%0D%0A` +
      `Message: ${formData.message}%0D%0A` +
      `Location: ${formData.location}`;

    window.location.href = `mailto:iam_adisxn@outlook.com?subject=New Contact Form Submission&body=${body}`;
  };

  console.log("Popup visible?", showPopup);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div style={{ zIndex: 9999 }} className="block fixed top-0 w-full h-[60px] bg-white flex items-center justify-between px-4 border-b border-gray-300">
        <Logo />
        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[var(--color-dark-brown)]">
            &#9776;
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 text-sm items-center">
          <Link href="/" className="hover:text-gray-600">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => {
              console.log("Contact button clicked");
              setShowPopup(true);
            }}
            className="hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
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
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[60px] right-4 bg-[var(--color-light-brown)] rounded shadow-lg p-4 space-y-2 z-[1000] flex flex-col items-start text-[var(--color-dark-brown)] lg:hidden">
            <a href="https://www.linkedin.com/in/itsadisxnn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/profadityasaxena" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://calendly.com/iam_adisxn/30min" target="_blank" rel="noopener noreferrer">Appointments</a>
          </div>
        )}
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[100]"
          style={{ backgroundColor: 'rgba(237, 224, 212, 0.5)' }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg w-[90%] max-w-md space-y-4"
            style={{
              backgroundColor: 'var(--color-light-brown)',
              color: 'var(--color-dark-brown)',
              fontFamily: 'var(--font-form)',
              border: '1px solid var(--color-dark-brown)'
            }}
          >
            <h2 className="text-xl font-semibold" style={{ color: 'var(--color-dark-brown)' }}>Contact Form</h2>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              onChange={handleChange}
              required
              minLength={2}
              className="w-full p-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-dark-brown)',
                border: '1px solid var(--color-cream)',
                borderRadius: '0.25rem',
                fontFamily: 'var(--font-form)'
              }}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              onChange={handleChange}
              required
              minLength={2}
              className="w-full p-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-dark-brown)',
                border: '1px solid var(--color-cream)',
                borderRadius: '0.25rem',
                fontFamily: 'var(--font-form)'
              }}
            />
            <select
              name="gender"
              aria-label="Gender"
              onChange={handleChange}
              required
              className="w-full p-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-dark-brown)',
                border: '1px solid var(--color-cream)',
                borderRadius: '0.25rem',
                fontFamily: 'var(--font-form)'
              }}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Enter a valid email address"
              className="w-full p-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-dark-brown)',
                border: '1px solid var(--color-cream)',
                borderRadius: '0.25rem',
                fontFamily: 'var(--font-form)'
              }}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              aria-label="Phone"
              onChange={handleChange}
              required
              minLength={10}
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              className="w-full p-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-dark-brown)',
                border: '1px solid var(--color-cream)',
                borderRadius: '0.25rem',
                fontFamily: 'var(--font-form)'
              }}
            />
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              onChange={handleChange}
              required
              minLength={10}
              className="w-full p-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-dark-brown)',
                border: '1px solid var(--color-cream)',
                borderRadius: '0.25rem',
                fontFamily: 'var(--font-form)'
              }}
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 rounded transition hover:bg-[var(--color-deep-brown)] hover:text-[var(--color-white)]"
                style={{
                  backgroundColor: 'var(--color-soft-brown)',
                  color: 'var(--color-black)',
                  fontFamily: 'var(--font-button)'
                }}
              >
                Send
              </button>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="text-sm text-gray-500 underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TopNavigation;
