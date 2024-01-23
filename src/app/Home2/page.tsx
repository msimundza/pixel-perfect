export default function Home() {
  const options = [
    'vizualno savršene web stranice.',
    'digitalna rješenja gdje svaki piksel ima svoje mjesto.',
    'preciznost, dizajn, performanse.',
    'sinonim za digitalnu kreativnost.',
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
