'use client';
import React, { useState, useEffect } from 'react';
import './Cursor.css'; // Import the CSS file

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickable, setClickable] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const checkClickable = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button'
      ) {
        setClickable(true);
      } else {
        setClickable(false);
      }
    };
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', checkClickable);
    window.addEventListener('mouseout', checkClickable);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', checkClickable);
      window.removeEventListener('mouseout', checkClickable);
    };
  }, []);

  return (
    <span
      className={`custom-cursor ${clickable ? 'clickable' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
