'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './ContactForm.css';
import { getDictionary } from '@/dictionaries';
import RecaptchaScript from '../Recaptcha/Recaptcha';

export const ContactForm = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState('');
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
      phone: telephone,
      recaptchaToken,
    };

    try {
      const res = await fetch('/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Email sent successfully, reset form fields and reCAPTCHA
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

        alert('Email sent successfully');
      } else {
        // Handle server errors or invalid responses
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <>
      <RecaptchaScript />
      <form
        className="container text-black max-w-4xl mx-auto mt-10 rounded text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase">
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
            name="phone"
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
            disabled={isDisabled}
            type="submit"
            className={classNames(
              'cta flex w-full  place-items-center pl-12 py-2.5 text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-2 border-black shadow-button -skew-x-12 no-outline no-underline mx-auto mt-2 hover:shadow transition-shadow rounded',
              {
                'opacity-50 cursor-not-allowed pointer-events-none': isDisabled,
              }
            )}
          >
            <span className="ml-2"> {button}</span>
            <span className="-mr-10">
              <svg
                width="66px"
                height="33px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="arrow"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    className="two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    className="three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <div className="text-black flex mt-10">{required}</div>
      </form>
    </>
  );
};
