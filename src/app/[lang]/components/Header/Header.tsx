'use client';
import GreatBritainFlag from '/public/gb.svg';
import CroatianFlag from '/public/hr.svg';
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
        <GreatBritainFlag
          width={30}
          height={15}
          className={`${language === 'en' ? '' : 'grayscale'} mr-2 clickable`}
        />
      </Link>

      <Link href={redirectedPathname('hr')}>
        <CroatianFlag
          width={30}
          height={15}
          className={`${language === 'hr' ? '' : 'grayscale'} clickable`}
        />
      </Link>
    </header>
  );
};

export default Header;
