'use client';
import React, { useEffect, useRef, useState } from 'react';
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

export const Main = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  lang: Locale;
}) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const containerHeight = container.scrollHeight - container.clientHeight;

        const pixelsFromBottom = 100;

        if (containerHeight - scrollPosition <= pixelsFromBottom) {
          setShowScrollIndicator(false);
        } else {
          setShowScrollIndicator(true);
        }
      }
    };

    const container = containerRef.current;
    container!.addEventListener('scroll', handleScroll);

    return () => container!.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-auto overflow-x-hidden h-screen"
    >
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
      {showScrollIndicator && <ScrollIndicator />}
    </div>
  );
};
