import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [indicatorColor, setIndicatorColor] = useState('black'); // default color

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('section');

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setIndicatorColor(index % 2 === 0 ? 'black' : 'white');
        }
      });

      setIsVisible(!nearBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="scroll-indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        x="0"
        y="0"
        enableBackground="new 0 0 79.37 122.88"
        viewBox="0 0 79.37 122.88"
        fill={indicatorColor} // set fill color dynamically
      >
        <path d="M50.2 121.63c6.71-1.85 12.72-5.44 17.51-10.23 7.19-7.19 11.65-17.11 11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03C60.52 4.46 50.6 0 39.68 0 28.77 0 18.84 4.46 11.65 11.65 4.46 18.84 0 28.77 0 39.68v43.68c0 10.92 4.46 20.84 11.65 28.03 5.59 5.59 12.82 9.53 20.89 11.01 4.88.9 13.16.47 17.66-.77zM39.23 92.06c4.15 0 7.55-3.4 7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55s-7.55 3.4-7.55 7.55v7.78c0 4.15 3.39 7.55 7.55 7.55zm21.85 12.71c-5.49 5.49-13.07 8.91-21.4 8.91-8.33 0-15.9-3.41-21.4-8.91-5.49-5.49-8.91-13.07-8.91-21.4V39.68c0-8.33 3.41-15.9 8.91-21.4 5.49-5.49 13.07-8.91 21.4-8.91 8.33 0 15.9 3.41 21.4 8.91 5.49 5.49 8.91 13.07 8.91 21.4v43.68c0 8.34-3.41 15.91-8.91 21.41z" />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
