'use client';
import Image from 'next/image';
import Typewriter from '../Typewriter';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import typeWriterBgImage from '/public/bg.webp';
import { getDictionary } from '@/dictionaries';

const TypewriterSection = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  useGSAP(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      const scrub = 0.2;

      const p = document.querySelector(
        'section:nth-of-type(2) p'
      ) as HTMLElement;
      gsap
        .timeline()
        .to(p, {
          opacity: 1,
          immediateRender: false,
          scrollTrigger: {
            trigger: p.parentNode!.parentNode as Element,
            scrub,
            start: 'top bottom',
            end: 'top 50%',
          },
        })
        .to(p, {
          opacity: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: p.parentNode!.parentNode as Element,
            scrub,
            start: 'bottom bottom',
            end: 'bottom 50%',
          },
        });
    }
  });

  const options = Object.values(dictionary.typewriter);

  return (
    <div>
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
    </div>
  );
};

export default TypewriterSection;
