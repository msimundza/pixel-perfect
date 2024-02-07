'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './styles.css';
import Image from 'next/image';
import Typewriter from './components/Typewriter';
import Cursor from './components/CustomCursor/Cursor';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import { useGSAP } from '@gsap/react';
import ProjectShowcase from './components/ProjectsShowcase/ProjectsShowcase';

const options = [
  'Vizualno Savršene Web Stranice.',
  'Digitalna Rješenja gdje Svaki Piksel ima Svoje Mjesto.',
  'Preciznost, Dizajn, Performanse.',
  'Sinonim za Digitalnu Kreativnost.',
];

export default function Home() {
  useGSAP(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      gsap.registerPlugin(ScrollTrigger);
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

  return (
    <>
      <Cursor />
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
        <div className="section__content">
          <p>
            <Typewriter options={options} />
            <span className="blink text-primary-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              |
            </span>
          </p>
        </div>
      </section>
      <section>
        <div className="mb-16">
          <div className="mx-auto mt-16">
            <div className="flex flex-col md:flex-row md:flex-wrap sm:p-2">
              <div className="md:order-1 element-scale-up uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
                O meni
              </div>
              <div className="md:order-2 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Strastveni web developer s preko 10 godina iskustva u IT
                  sektoru, od rada sa Start-up projektima do rada sa velikim
                  multimilijunskim tvrtkama
                </div>
              </div>
              <div className="md:order-4 element-scale-up uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
                Moja misija
              </div>
              <div className="md:order-3 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Pomaganje malim i srednjim poduzećima da ostvare svoj puni
                  online potencijal kroz detaljnu analizu zahtjeva, strateško
                  planiranje i primjenu najnovijih tehnologija u dizajnu i
                  razvoju web stranica i/ili aplikacija.
                </div>
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Osigurati da Vaša online prisutnost ne samo da ostane
                  relevantna, već i da kontinuirano raste i prilagođava se
                  promjenjivom digitalnom pejzažu.
                </div>
              </div>
              <div className="md:order-5 element-scale-up uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
                Nudim
              </div>
              <div className="md:order-6 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Izrada personaliziranih web stranica i/ili aplikacije koje
                  točno odgovaraju potrebama i ciljevima svakog klijenta.
                </div>
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Održavanje i modernizacija postojećih web stranica i/ili
                  aplikacija.
                </div>
              </div>
              <div className="md:order-8 element-scale-up text-center uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center w-full md:w-1/2 mb-2">
                Zašto Pixel Perfect?
              </div>
              <div className="md:order-7 element-scale-up bg-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white shadow-lg rounded-lg p-6 w-full md:w-1/2 mb-10">
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Odabir Pixel Perfect obrta za Vaše web rješenje znači
                  posvećenost detaljima, povjerenje u individualni pristup i
                  strast prema web tehnologijama.
                </div>
                <div className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-6xl mb-2">
                  Veselim se prilici da zajedno radimo na ostvarivanju vaše
                  vizije i postavljanju vašeg poslovanja na putu prema online
                  uspjehu.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-12 px-4">
        <ProjectShowcase />
      </section>
      <ScrollIndicator />
    </>
  );
}
