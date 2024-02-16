'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const BlowoutText = () => {
  useGSAP(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      const scrub = 0.2;
      const name = document.querySelector('.blowout-text') as HTMLElement;
      gsap
        .timeline()
        .to(name, {
          scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: name.parentNode as Element,
            scrub,
            start: 'top top',
            end: 'bottom top-=25%',
          },
          opacity: 1,
        })
        .to(
          name,
          {
            scrollTrigger: {
              invalidateOnRefresh: true,
              trigger: name.parentNode as Element,
              scrub,
              start: 'top top',
              end: 'bottom top',
            },
            keyframes: {
              '0%': { background: 'transparent' },
              '95%': { background: 'transparent' },
              '100%': { z: '99vh', background: 'black' },
            },
          },
          0
        );
    }
  });

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
