import Typewriter from './components/Typewriter';

export default function Home() {
  const options = [
    'vizualno savršene web stranice.',
    'digitalna rješenja gdje svaki piksel ima svoje mjesto.',
    'preciznost, dizajn, performanse.',
    'sinonim za digitalnu kreativnost.',
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <div className="h-screen bg-parallax bg-cover bg-center">
          <span className="text-primary-500 text-5xl">Pixel Perfect </span>
          <Typewriter options={options} />
          <span className="blink text-primary-500 text-5xl">|</span>
        </div>
      </div>
    </main>
  );
}
