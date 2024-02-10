import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'attract',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            speed: 1,
          },
          push: {
            quantity: 5,
          },
        },
      },
      particles: {
        color: {
          value: '#FFFFFF',
        },
        links: {
          color: '#FFFFFF',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
          limit: {
            mode: 'wait',
            value: 300,
          },
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      fullScreen: {
        enable: false,
      },
    }),
    []
  );

  if (init) {
    return (
      <footer className="w-full bg-black text-white relative">
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0 z-0 pointer-events-none"
        />
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div>
              <Image
                src="/logo.webp"
                alt="Pixel Perfect logo"
                width={150}
                height={150}
                className=" rounded-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Brza navigacija</h2>
              <ul className="mt-2">
                <li>
                  <a
                    href="#about"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    O meni
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    Projekti
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-me"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    Kontaktirajte me
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Budite u toku</h2>
              <div className="mt-2">
                <ul className="mt-2">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61556434918711"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gray-300 transition-colors duration-300"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gray-300 transition-colors duration-300"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-8 md:mt-12">
            © {new Date().getFullYear()} Pixel Perfect. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  return <></>;
};

export default Footer;
