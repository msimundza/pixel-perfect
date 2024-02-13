'use client';
import { useState } from 'react';
import Image from 'next/image';
import greatBritainFlag from '/public/gb.svg';
import croatianFlag from '/public/hr.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/i18n-config';

interface HeaderProps {
  language: string;
}

const Header = ({ language }: HeaderProps) => {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header className="flex absolute right-0 p-4 pr-6 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-16 z-10">
      <Link href={redirectedPathname('en')}>
        <Image
          src={greatBritainFlag}
          alt="Great Britain flag"
          width={30}
          height={15}
          className={`${language === 'en' ? '' : 'grayscale'} mr-2`}
        />
      </Link>

      <Link href={redirectedPathname('hr')}>
        <Image
          src={croatianFlag}
          alt="Croatian flag"
          width={30}
          height={15}
          className={language === 'hr' ? '' : 'grayscale'}
        />
      </Link>
    </header>
  );
};

export default Header;
