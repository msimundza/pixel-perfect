'use client';
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './ContactForm.css';
import { getDictionary } from '@/dictionaries';
import RecaptchaScript from '../Recaptcha/Recaptcha';
import ArrowsButton from '/public/arrowsButton.svg';
import Spinner from '../Spinner/Spinner';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Locale } from '@/i18n-config';
import emailjs from '@emailjs/browser';

export const ContactForm = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  lang: Locale;
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const {
    firstName: firstNamePlaceholder,
    lastName: lastNamePlaceholder,
    telephone: telephonePlaceholder,
    message: messagePlaceholder,
    title,
    button,
    email: emailPlaceholder,
    required,
  } = dictionary.contact;

  const {
    firstName: firstNameValidationMessage,
    lastName: lastNameValidationMessage,
    email: emailValidationMessage,
    message: messageValidationMessage,
  } = dictionary.contact.formValidationMessages;

  useEffect(() => {
    // Define the reCAPTCHA callback functions and attach them to the window object
    window.onRecaptchaSuccess = (token: string) => {
      setRecaptchaToken(token);
    };

    window.onRecaptchaExpired = () => {
      setRecaptchaToken('');
    };

    return () => {
      // Remove the script and clean up the global functions
      delete window.onRecaptchaSuccess;
      delete window.onRecaptchaExpired;
    };
  }, []);

  useEffect(() => {
    const isFormValid =
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      message.trim() !== '' &&
      recaptchaToken.trim() !== '';
    setIsDisabled(!isFormValid);
  }, [firstName, lastName, email, message, recaptchaToken]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      console.error('Form is invalid');
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      message,
      telephone,
      recaptchaToken,
    };

    try {
      setIsLoading(true);
      emailjs
        .sendForm('service_xf8la9p', 'template_wv50r6d', form.current as any, {
          publicKey: 'Uyb3mMjEPjxUhK-U-',
        })
        .then(
          () => {
            // Email sent successfully, reset form fields and reCAPTCHA

            console.log('SUCCESS!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
            setTelephone('');
            setRecaptchaToken(''); // Clear the reCAPTCHA token state

            // Reset the reCAPTCHA widget
            if (window.grecaptcha) {
              window.grecaptcha.reset();
            }

            toast.success('Email sent successfully!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
              transition: Slide,
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
            // Handle server errors or invalid responses
            throw new Error('Failed to send message');
          }
        );
    } catch (error) {
      console.error('Error sending email', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RecaptchaScript />
      <form
        className="container text-black max-w-4xl mx-auto mt-10 rounded text-center"
        ref={form}
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold uppercase">
          {title}
        </h2>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder={firstNamePlaceholder}
            className="bg-white shadow-button focus:shadow-sm transition-shadow border-2 border-black p-3 rounded outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
              e.target.setCustomValidity(firstNameValidationMessage)
            }
            onInput={(e: React.FormEvent<HTMLInputElement>) =>
              e.currentTarget.setCustomValidity('')
            }
          />
          <input
            type="text"
            name="lastName"
            placeholder={lastNamePlaceholder}
            className="bg-white shadow-button focus:shadow-sm transition-shadow  border-2 border-black p-3 rounded outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
              e.target.setCustomValidity(lastNameValidationMessage)
            }
            onInput={(e: React.FormEvent<HTMLInputElement>) =>
              e.currentTarget.setCustomValidity('')
            }
          />
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            className="bg-white shadow-button focus:shadow-sm transition-shadow  border-2 border-black p-3 rounded outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
              e.target.setCustomValidity(emailValidationMessage)
            }
            onInput={(e: React.FormEvent<HTMLInputElement>) =>
              e.currentTarget.setCustomValidity('')
            }
            autoComplete="email"
          />
          <input
            type="tel"
            name="telephone"
            placeholder={telephonePlaceholder}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="bg-white shadow-button focus:shadow-sm transition-shadow  border-2 border-black p-3 rounded outline-none"
            autoComplete="tel"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            placeholder={messagePlaceholder}
            className="bg-white shadow-button focus:shadow-sm transition-shadow border-2 border-black p-3 rounded outline-none w-full"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInvalid={(e: React.InvalidEvent<HTMLTextAreaElement>) =>
              e.target.setCustomValidity(messageValidationMessage)
            }
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
              e.currentTarget.setCustomValidity('')
            }
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
              marginTop: '1rem',
            }}
            className="g-recaptcha"
            data-theme="dark"
            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            data-callback="onRecaptchaSuccess"
            data-expired-callback="onRecaptchaExpired"
          ></div>
          <button
            disabled={isDisabled || isloading}
            type="submit"
            className={classNames(
              'cta clickable flex w-full place-items-center pl-12 py-2.5 text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-2 border-black shadow-button -skew-x-12 no-outline no-underline mx-auto mt-2 hover:shadow transition-shadow rounded',
              {
                'opacity-50 cursor-not-allowed pointer-events-none':
                  isDisabled || isloading,
              }
            )}
          >
            {isloading ? (
              <Spinner className="-ml-12" />
            ) : (
              <>
                <span className="ml-2"> {button}</span>
                <span className="ml-2 -mr-10">
                  <ArrowsButton />
                </span>
              </>
            )}
          </button>
        </div>
        <div className="text-black flex mt-10">{required}</div>
      </form>
      <ToastContainer />
    </>
  );
};
