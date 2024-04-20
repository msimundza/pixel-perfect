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
    <header className="fixed flex top-0 left-0 right-0 border-b border-gray-400 h-16 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-md z-10">
      <div className="flex items-center ml-auto pr-6 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-16">
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
    </header>
  );
};

export default Header;
