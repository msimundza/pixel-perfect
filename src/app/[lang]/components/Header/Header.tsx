'use client';
import GreatBritainFlag from '../../../../../public/gb.svg';
import CroatianFlag from '../../../../../public/hr.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import logo from '../../../../../public/logo.webp';
import { getDictionary } from '@/dictionaries';
import { useState } from 'react';

interface HeaderProps {
  language: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const Header = ({ language, dictionary }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const HeaderLink = ({ href, text }: { href: string; text: string }) => (
    <Link
      href={href}
      className="nav-link clickable text-lg mr-4"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href.substring(1));
        setIsMobileMenuOpen(false); // Close the mobile menu
      }}
    >
      {text}
    </Link>
  );

  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 border-b border-gray-400 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-md z-10 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16"
      id="header"
    >
      <div className="flex items-center justify-between h-20">
        <div className="items-center hidden md:flex">
          <Link
            href="#header"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <Image
              src={logo}
              alt="Pixel Perfect logo"
              width={60}
              height={60}
              className="rounded-full mr-6 clickable"
            />
          </Link>
        </div>

        {/* Hamburger menu for smaller screens */}
        <button
          className="block md:hidden text-gray-500 focus:outline-none focus:text-gray-700"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16m-7 6h7'
              }
            />
          </svg>
        </button>

        {/* Navigation links */}
        <nav className="hidden md:flex md:mr-auto">
          <HeaderLink href="#about" text={dictionary.aboutMe.title1} />
          <HeaderLink href="#projects" text={dictionary.projects.title} />
          <HeaderLink href="#contact-me" text={dictionary.contact.title} />
        </nav>

        <div className="flex items-center ml-auto pr-1 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-16">
          <Link href={redirectedPathname('en')}>
            <GreatBritainFlag
              width={30}
              height={15}
              className={`${
                language === 'en' ? '' : 'grayscale'
              } mr-2 clickable h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14`}
            />
          </Link>

          <Link href={redirectedPathname('hr')}>
            <CroatianFlag
              width={30}
              height={15}
              className={`${
                language === 'hr' ? '' : 'grayscale'
              } clickable h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14`}
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu for smaller screens */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'} `}>
        <nav className="flex flex-col mb-2">
          <HeaderLink href="#about" text={dictionary.aboutMe.title1} />
          <HeaderLink href="#projects" text={dictionary.projects.title} />
          <HeaderLink href="#contact-me" text={dictionary.contact.title} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
