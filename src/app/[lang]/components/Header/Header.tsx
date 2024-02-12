'use client';
import Link from 'next/link';
const Header: React.FC = () => {
  const switchLanguage = (language: string) => {
    console.log(language);
  };

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4">
      <nav className="flex gap-4"></nav>
      <div>
        <button onClick={() => switchLanguage('en')} className={'mr-2'}>
          EN
        </button>
        <button onClick={() => switchLanguage('hr')}>HR</button>
      </div>
    </header>
  );
};

export default Header;
