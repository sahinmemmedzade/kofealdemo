// BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';
import { FaUpLong } from 'react-icons/fa6';

const BackToTopButton = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 20); // Show button only if scrollTop is greater than 20 pixels
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const borderWidth = Math.max(0, scrollPercentage / 93);

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none', // Show/hide based on isVisible state
        border: `${borderWidth}rem solid blue`, // Adjusting the width of the border based on scroll percentage
        backgroundColor: 'white',
        borderRadius: '50%', // Makes it circular
        width: '50px',
        height: '50px',
        outline: 'none', // Remove outline on click
        transition: 'border-width 0.3s ease', // Adding transition for the border width
      }}
    >
      <FaUpLong />
    </button>
  );
};

export default BackToTopButton;
