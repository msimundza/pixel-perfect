import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white">
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
};

export default Footer;
