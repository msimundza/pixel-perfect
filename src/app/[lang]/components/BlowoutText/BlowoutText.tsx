'use client';
import React from 'react';

export const BlowoutText = () => {
  return (
    <div className="section__content overflow-hidden">
      <svg className="blowout-text text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          Pixel Perfect
        </text>
      </svg>
    </div>
  );
};
