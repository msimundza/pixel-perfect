import Typewriter from './components/Typewriter';

export default function Home() {
  const options = [
    'Vizualno Savršene Web Stranice.',
    'Digitalna Rješenja gdje Svaki Piksel Ima Svoje Mjesto.',
    'Preciznost, Dizajn, Performanse.',
    'Sinonim za Digitalnu Kreativnost.',
  ];

  return (
    <>
      <header className="flex justify-center text-black mx-auto text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Pixel Perfect
      </header>
      <main>
        <div>
          <header
            aria-hidden
            className="flex justify-center text-white mx-auto text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Pixel Perfect
          </header>
          <section className="min-h-screen w-full bg-parallax bg-cover bg-center flex items-center"></section>
        </div>
        <section className="bg-white min-h-screen">BLAAAA</section>
      </main>
    </>
  );
}

/* <section className="h-screen w-full bg-parallax bg-cover bg-center flex items-center">
        <span className="text-primary-500 text-5xl">Pixel Perfect </span>
        <Typewriter options={options} />
        <span className="blink text-primary-500 text-5xl">|</span>
        <div className="text-white mx-auto text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Pixel Perfect
        </div>
      </section>*/
