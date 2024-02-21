import React, { useEffect, useState } from 'react';
import styles from './Typewriter.module.css';

interface TypewriterProps {
  options: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ options }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [blinkCursor, setBlinkCursor] = useState(false); // Controls if the cursor should blink

  useEffect(() => {
    let typingTimeoutId: NodeJS.Timeout;
    const currentOption = options[currentOptionIndex];

    if (isTyping) {
      if (currentText.length < currentOption.length) {
        setBlinkCursor(false); // Stop blinking when typing
        typingTimeoutId = setTimeout(() => {
          setCurrentText(currentOption.substring(0, currentText.length + 1));
        }, 60);
      } else {
        // Start blinking once typing is complete
        setBlinkCursor(true);
        typingTimeoutId = setTimeout(() => {
          setIsTyping(false); // Prepare to delete after a pause
        }, 2000); // Pause before starting deletion
      }
    } else {
      if (currentText.length > 0) {
        setBlinkCursor(false); // Cursor visible but not blinking during deletion
        typingTimeoutId = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 60);
      } else {
        // After deletion, move to the next sentence and blink until typing starts
        setIsTyping(true);
        setBlinkCursor(true); // Blink cursor when idle
        setCurrentOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
      }
    }

    return () => {
      clearTimeout(typingTimeoutId);
    };
  }, [currentText, isTyping, currentOptionIndex, options]);

  return (
    <span className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      {currentText}
      <span className={`${styles.cursor} ${blinkCursor ? styles.blink : ''}`}>
        |
      </span>
    </span>
  );
};

export default Typewriter;
