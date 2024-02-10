'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';
import Image from 'next/image';
import Typewriter from './components/Typewriter';
import Cursor from './components/CustomCursor/Cursor';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import { useGSAP } from '@gsap/react';
import ProjectShowcase from './components/ProjectsShowcase/ProjectsShowcase';
import Footer from './components/Footer/Footer';
import { ContactForm } from './components/ContactForm/ContactForm';
import About from './components/About/About';

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
            <span className="blink text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              |
            </span>
          </p>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section className="bg-black py-12 px-4" id="projects">
        <ProjectShowcase />
      </section>
      <section
        className="flex place-items-center bg-white py-12 px-4"
        id="contact-me"
      >
        <ContactForm />
      </section>
      <ScrollIndicator />
      <Footer />
    </>
  );
}
