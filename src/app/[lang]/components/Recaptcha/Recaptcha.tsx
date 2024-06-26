import { useEffect } from 'react';

const RecaptchaScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      console.log('Script loaded');
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default RecaptchaScript;
