'use client';
import Image from 'next/image';
import typeWriterBgImage from '../../../../../public/bg.webp';
import { getDictionary } from '@/dictionaries';
import Typewriter from './Typewriter';

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
        <h2>
          <Typewriter options={options} />
        </h2>
      </div>
    </>
  );
};

export default TypewriterSection;
