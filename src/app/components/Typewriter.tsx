'use client';
import React, { useEffect, useRef } from 'react';

interface TypewriterProps {
  options: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ options }) => {
  const typerRef = useRef<HTMLDivElement>(null);
  let blinkHandle: NodeJS.Timeout | null = null;

  const startBlink = () => {
    blinkHandle = setInterval(() => {
      const blink = document.querySelector('.blink') as HTMLElement;
      blink.style.visibility =
        blink.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
  };

  const stopBlink = () => {
    const blink = document.querySelector('.blink') as HTMLElement;
    blink.style.visibility = 'visible';
    if (blinkHandle) clearInterval(blinkHandle);
  };

  const replaceTyper = async () => {
    const typer = typerRef.current;
    if (!typer) return;

    const current = typer.innerText;
    const next = options[(options.indexOf(current) + 1) % options.length];

    const CHAR_DELAY = 35;
    const WORD_DELAY = 1000;

    stopBlink();

    while (typer.innerText.length > 0) {
      typer.innerText = typer.innerText.slice(0, -1);
      await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
    }

    for (let i = 0; i < next.length; i++) {
      typer.innerText += next[i];
      await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
    }

    startBlink();

    await new Promise((resolve) => setTimeout(resolve, WORD_DELAY));
    replaceTyper();
  };

  useEffect(() => {
    let typerHandle: NodeJS.Timeout | null = null;
    const typer = typerRef.current;
    if (!typer) return;

    // Intersection Observer configuration
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Typewriter is in the viewport!');
          // Start the typewriter animation when in the viewport
          startBlink();
          typerHandle = setTimeout(() => {
            replaceTyper();
          }, 4000);

          // Disconnect the observer once triggered
          observer.disconnect();
        } else {
          // Pause or reset the animation when out of the viewport
          if (blinkHandle) clearInterval(blinkHandle);
          if (typerHandle) clearTimeout(typerHandle);
          typer.innerText = ''; // Reset the text
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(typer);

    // Clean up the intervals on component unmount
    return () => {
      if (blinkHandle) clearInterval(blinkHandle);
      if (typerHandle) clearTimeout(typerHandle);
      observer.disconnect(); // Disconnect the Intersection Observer
    };
  }, [options]);

  return (
    <span
      className="text-white whitespace-pre-wrap text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      ref={typerRef}
      id="typer"
    ></span>
  );
};

export default Typewriter;
