'use client';
const Header: React.FC = () => {
  const switchLanguage = (language: string) => {
    console.log(language);
  };

  return (
    <header className="h-[50px] bg-gray-800 text-white flex justify-between items-center p-4">
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
