'use client';
import React, { useRef } from 'react';
import Cursor from '../CustomCursor/Cursor';
import Header from '../Header/Header';
import { BlowoutText } from '../BlowoutText/BlowoutText';
import TypewriterSection from '../TypewriterSection/TypewriterSection';
import ProjectShowcase from '../ProjectsShowcase/ProjectsShowcase';
import About from '../About/About';
import { ContactForm } from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export const Main = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  lang: Locale;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!CSS.supports('animation-timeline: scroll()')) {
      const scrub = 0.2;
      const name = document.querySelector('.blowout-text') as HTMLElement;
      gsap
        .timeline()
        .to(name, {
          scrollTrigger: {
            scroller: scrollContainerRef.current,
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
              scroller: scrollContainerRef.current,
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
            scroller: scrollContainerRef.current,
            trigger: p.parentNode?.parentNode as Element,
            scrub,
            start: 'top bottom',
            end: 'top 70%',
          },
        })
        .to(p, {
          opacity: 0,
          immediateRender: false,
          scrollTrigger: {
            scroller: scrollContainerRef.current,
            trigger: p.parentNode?.parentNode as Element,
            scrub,
            start: 'bottom bottom',
            end: 'bottom 70%',
          },
        });

      const pictureWrap = document.querySelector('.picture-wrap');
      gsap
        .timeline()
        .to(pictureWrap, {
          opacity: 1,
          immediateRender: false,
          scrollTrigger: {
            scroller: scrollContainerRef.current,
            trigger: pictureWrap?.parentNode as Element,
            scrub,
            start: 'top bottom',
            end: 'top 70%',
            markers: true,
          },
        })
        .to(pictureWrap, {
          opacity: 0,
          immediateRender: false,
          scrollTrigger: {
            scroller: scrollContainerRef.current,
            trigger: pictureWrap?.parentNode as Element,
            scrub,
            start: 'bottom bottom',
            end: 'bottom 70%',
            markers: true,
          },
        });

      const scaleUpBoxes = gsap.utils.toArray('.element-scale-up');
      scaleUpBoxes.forEach((scaleUpBox: any) => {
        gsap.to(scaleUpBox, {
          scrollTrigger: {
            scroller: scrollContainerRef.current,
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
    <div ref={scrollContainerRef} className="overflow-x-hidden h-screen">
      <Cursor />
      <section className="bg-white text-black min-h-screen w-screen relative">
        <Header language={lang} />
        <BlowoutText />
      </section>
      <section className="min-h-screen w-screen">
        <TypewriterSection dictionary={dictionary} />
      </section>
      <section id="about" className="min-h-screen w-screen bg-white text-black">
        <About dictionary={dictionary} />
      </section>
      <section
        className="min-h-screen w-screen bg-black py-12 px-4"
        id="projects"
      >
        <ProjectShowcase dictionary={dictionary} />
      </section>
      <section
        className="min-h-screen w-screen flex place-items-center bg-white py-12 px-4"
        id="contact-me"
      >
        <ContactForm dictionary={dictionary} />
      </section>
      <Footer dictionary={dictionary} />
      <ScrollIndicator scrollContainerRef={scrollContainerRef} />
    </div>
  );
};
