// components/Spinner.tsx
import React from 'react';
import './Spinner.css';

const Spinner = ({ className }: { className?: string }) => {
  return <div className={`spinner ${className || ''}`.trim()}></div>;
};

export default Spinner;
