'use client';
import React, { useEffect, useRef } from 'react';

interface TypewriterProps {
  options: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ options }) => {
  const typerRef = useRef<HTMLDivElement>(null);
  let blinkHandle: NodeJS.Timeout | null = null;
  let typerHandle: NodeJS.Timeout | null = null;

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
    const WORD_DELAY = 2400;

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
    startBlink();

    typerHandle = setTimeout(() => {
      replaceTyper();
    }, 4000);

    // Clean up the intervals on component unmount
    return () => {
      if (blinkHandle) clearInterval(blinkHandle);
      if (typerHandle) clearTimeout(typerHandle);
    };
  }, [options]);

  return (
    <span
      className="text-5xl text-primary-100"
      ref={typerRef}
      id="typer"
    ></span>
  );
};

export default Typewriter;
