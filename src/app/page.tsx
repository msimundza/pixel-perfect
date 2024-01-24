'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './styles.css';
import Image from 'next/image';
import Typewriter from './components/Typewriter';

const options = [
  'Vizualno Savršene Web Stranice.',
  'Digitalna Rješenja gdje Svaki Piksel ima Svoje Mjesto.',
  'Preciznost, Dizajn, Performanse.',
  'Sinonim za Digitalnu Kreativnost.',
];

export default function Home1() {
  useEffect(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      gsap.registerPlugin(ScrollTrigger);
      console.clear();
      const scrub = 0.2;
      const name = document.querySelector(
        'section:nth-of-type(1) svg'
      ) as HTMLElement;
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
  }, []);

  return (
    <>
      <section>
        <div className="section__content">
          <svg className="text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
              Pixel Perfect
            </text>
          </svg>
        </div>
      </section>
      <section>
        <div className="picture-wrap">
          <Image fill src="/bg.webp" alt="background image" />
        </div>
        <div className="flex section__content">
          <p>
            <Typewriter options={options} />
            <span className="blink text-primary-500 text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              |
            </span>
          </p>
        </div>
      </section>
      <section>
        <div className="section__content">
          <h2>
            fin.<span>p.s position: fixed ftw</span>
          </h2>
        </div>
      </section>
    </>
  );
}
