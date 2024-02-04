'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './styles.css';
import Image from 'next/image';
import Typewriter from './components/Typewriter';
import Cursor from './components/CustomCursor/Cursor';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';

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
        <div className="section__content mb-16">
          <div className="container mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="element-slide-in-left uppercase text-black text-8xl flex items-center justify-center">
                O meni
              </div>
              <div className="element-slide-in-right bg-black text-3xl text-white shadow-lg rounded-lg p-6">
                <div className="first-letter:text-5xl">
                  Strastveni web developer s preko 10 godina iskustva u IT
                  sektoru, od rada sa Start-up projektima do rada sa velikim
                  multimilijunskim tvrtkama
                </div>
              </div>
              <div className="bg-black text-3xl text-white shadow-lg rounded-lg p-6">
                <div className="first-letter:text-5xl mb-2">
                  Pomaganje malim i srednjim poduzećima da ostvare svoj puni
                  online potencijal kroz detaljnu analizu zahtjeva, strateško
                  planiranje i primjenu najnovijih tehnologija u dizajnu i
                  razvoju web stranica i/ili aplikacija.
                </div>
                <div className="first-letter:text-5xl mb-2">
                  Osigurati da Vaša online prisutnost ne samo da ostane
                  relevantna, već i da kontinuirano raste i prilagođava se
                  promjenjivom digitalnom pejzažu.
                </div>
              </div>
              <div className="uppercase text-black text-8xl flex items-center justify-center">
                Misija
              </div>
              <div className="uppercase text-black text-8xl flex items-center justify-center">
                Nudim
              </div>
              <div className="bg-black text-3xl text-white shadow-lg rounded-lg p-6">
                <div className="first-letter:text-5xl mb-2">
                  Izrada personaliziranih web stranica i/ili aplikacije koje
                  točno odgovaraju potrebama i ciljevima svakog klijenta.
                </div>
                <div className="first-letter:text-5xl mb-2">
                  Održavanje i modernizacija postojećih web stranica i/ili
                  aplikacija.
                </div>
              </div>
              <div className="bg-black text-3xl text-white shadow-lg rounded-lg p-6">
                <div className="first-letter:text-5xl mb-2">
                  Odabir Pixel Perfect obrta za Vaše web rješenje znači
                  posvećenost detaljima, povjerenje u individualni pristup i
                  strast prema web tehnologijama.
                </div>
                <div className="first-letter:text-5xl mb-2">
                  Veselim se prilici da zajedno radimo na ostvarivanju vaše
                  vizije i postavljanju vašeg poslovanja na putu prema online
                  uspjehu.
                </div>
              </div>
              <div className="uppercase text-black text-8xl flex items-center justify-center">
                Zašto Pixel Perfect?
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>

      <ScrollIndicator />
    </>
  );
}
