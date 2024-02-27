'use client';
import React, { useState, useEffect, RefObject } from 'react';
import './ScrollIndicator.css';

interface ScrollIndicatorProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

const ScrollIndicator = ({ scrollContainerRef }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const bottom = container.scrollHeight - container.clientHeight;
      const scrollPosition = container.scrollTop;
      const buffer = 100;
      const progress = (scrollPosition / bottom) * 100;

      setIsVisible(bottom - scrollPosition > buffer);
      setScrollProgress(progress);
    };

    const scrollableDiv = scrollContainerRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainerRef]);

  return (
    <>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      {isVisible && (
        <div className="scroll-indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 18 18"
            stroke="white"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              fill="black"
              d="M8 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 0a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 1 1 1.414 1.414L8 10.414 4.293 6.707a1 1 0 0 1 1.414-1.414L7 6.586V1a1 1 0 0 1 1-1Z"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
