import React, { useState, useEffect } from 'react';
import './Cursor.css'; // Import the CSS file

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickable, setClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkClickable = (e: MouseEvent) => {
      // Efficiently check if the hovered element or any of its parents have the 'clickable' class
      let target: HTMLElement | null = e.target as HTMLElement;
      while (target && !target.classList.contains('clickable')) {
        target = target.parentElement;
      }
      setClickable(!!target);
    };

    // Add event listeners only if it's not a touch device
    if (!isTouchDevice) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseover', checkClickable);
    }

    return () => {
      if (!isTouchDevice) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mouseover', checkClickable);
      }
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

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
