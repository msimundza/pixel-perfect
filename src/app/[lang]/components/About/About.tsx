'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { getDictionary } from '@/dictionaries';

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  useGSAP(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      const scaleUpBoxes = gsap.utils.toArray('.element-scale-up');
      scaleUpBoxes.forEach((scaleUpBox: any) => {
        gsap.to(scaleUpBox, {
          scrollTrigger: {
            trigger: scaleUpBox,
            scrub: true,
            start: 'top bottom', // when the bottom of the trigger hits the bottom of the viewport
            end: 'center center', // end after triggers center scrolls past center of the viewport
          },
          keyframes: {
            '0%': { transform: 'scale(0.8)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
        });
      });
    }
  });

  const {
    title1,
    title2,
    title3,
    title4,
    value1,
    value21,
    value22,
    value31,
    value32,
    value41,
    value42,
  } = dictionary.aboutMe;

  return (
    <div className="pb-16">
      <div className="mx-auto pt-16">
        <div className="flex flex-col md:flex-row md:flex-wrap sm:p-2">
          <div className="md:order-1 element-scale-up text-center uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
            {title1}
          </div>
          <div className="md:order-2 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value1}
            </div>
          </div>
          <div className="md:order-4 element-scale-up text-center uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
            {title2}
          </div>
          <div className="md:order-3 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value21}
            </div>
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value22}
            </div>
          </div>
          <div className="md:order-5 element-scale-up text-center uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
            {title3}
          </div>
          <div className="md:order-6 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value31}
            </div>
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value32}
            </div>
          </div>
          <div className="md:order-8 element-scale-up text-center uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
            {title4}
          </div>
          <div className="md:order-7 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value41}
            </div>
            <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
              {value42}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
