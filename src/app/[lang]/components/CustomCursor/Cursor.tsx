import React, { useState, useEffect } from 'react';
import './Cursor.css'; // Import the CSS file

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickable, setClickable] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkClickable = (e: MouseEvent) => {
      // Efficiently check if the hovered element or any of its parents have the 'clickable' class
      let target: HTMLElement | null = e.target as HTMLElement;
      while (target && !target.classList.contains('clickable')) {
        target = target.parentElement;
      }
      setClickable(!!target); // true if 'clickable', false otherwise
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', checkClickable);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', checkClickable);
    };
  }, []);

  return (
    <span
      className={`custom-cursor ${clickable ? 'clickable-active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
