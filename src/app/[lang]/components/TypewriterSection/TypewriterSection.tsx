'use client';
import Image from 'next/image';
import Typewriter from '../Typewriter';
import typeWriterBgImage from '/public/bg.webp';
import { getDictionary } from '@/dictionaries';

const TypewriterSection = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const options = Object.values(dictionary.typewriter);

  return (
    <>
      <div className="picture-wrap">
        <Image fill src={typeWriterBgImage} alt="background image" />
      </div>
      <div className="section__content">
        <p>
          <Typewriter options={options} />
          <span className="blink text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            |
          </span>
        </p>
      </div>
    </>
  );
};

export default TypewriterSection;
