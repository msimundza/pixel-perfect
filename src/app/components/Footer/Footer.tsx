import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const Footer: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'black',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
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
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold">Your Logo</h2>
              <p className="mt-2 text-gray-400">
                Creating impactful digital experiences.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <div className="flex mt-2 space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Twitter
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Instagram
                </a>
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
