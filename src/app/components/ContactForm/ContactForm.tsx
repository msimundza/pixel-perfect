import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-black p-10 max-w-md mx-auto mt-10 rounded">
      <h2 className="text-white text-lg mb-6">CONTACT US</h2>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="bg-white border-2 border-gray-300 p-3 rounded outline-none"
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="bg-white border-2 border-gray-300 p-3 rounded outline-none"
        />
      </div>
      <div className="grid gap-6 mb-6">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white border-2 border-gray-300 p-3 rounded outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="bg-white border-2 border-gray-300 p-3 rounded outline-none"
        />
      </div>
      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Message"
          className="bg-white border-2 border-gray-300 p-3 rounded outline-none w-full"
          rows={5}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-white text-black rounded py-3 px-6 hover:bg-gray-100 focus:outline-none w-full"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default ContactForm;
