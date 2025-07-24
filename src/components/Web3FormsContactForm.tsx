'use client';

import React, { useState } from 'react';

const Web3FormsContactForm = () => {
  const [status, setStatus] = useState(''); // State to manage form submission status

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setStatus('sending'); // Set status to sending

    const form = event.currentTarget;
    const data = new FormData(form); // Get form data

    try {
      data.append('access_key', '7eaec1b2-f2fe-4f3a-b04a-3a2ddaea2b71');

      // Send form data to Web3Forms endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('success'); // Set status to success
        form.reset(); // Clear the form fields
      } else {
        const result = await response.json(); // Get error details from response
        setStatus('error'); // Set status to error
        console.error('Web3Forms error:', result); // Log the error to console for debugging
      }
    } catch (error) {
      setStatus('error'); // Set status to error
      console.error('Network or other error:', error); // Log the error to console for debugging
    }
  };

  return (
    <div className='p-4 sm:p-6 h-full flex flex-col'>
      <h3 className='text-2xl font-bold text-[var(--obl-dark-blue)] mb-6 text-center'>
        Send Us a Message
      </h3>
      {/* Form submission status messages */}
      {status === 'success' && (
        <div
          className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-4'
          role='alert'>
          <strong className='font-bold'>Success!</strong>
          <span className='block sm:inline ml-2'>Your message has been sent.</span>
        </div>
      )}
      {status === 'error' && (
        <div
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-4'
          role='alert'>
          <strong className='font-bold'>Error!</strong>
          <span className='block sm:inline ml-2'>
            There was an issue sending your message. Please try again.
          </span>
        </div>
      )}
      {status === 'sending' && (
        <div
          className='bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-md relative mb-4'
          role='alert'>
          <strong className='font-bold'>Sending...</strong>
          <span className='block sm:inline ml-2'>Please wait.</span>
        </div>
      )}
      {/* Removed flex-grow and justify-between from the form */}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        {/* Name field - added mb-4 for spacing */}
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 text-sm font-semibold mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--obl-blue)] focus:border-transparent transition duration-200 ease-in-out'
            required
            aria-label='Your Name'
          />
        </div>
        {/* Email field - added mb-4 for spacing */}
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--obl-blue)] focus:border-transparent transition duration-200 ease-in-out'
            required
            aria-label='Your Email'
          />
        </div>
        {/* Message field - added mb-6 for spacing before the button */}
        <div className='mb-6'>
          <label htmlFor='message' className='block text-gray-700 text-sm font-semibold mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            className='shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--obl-blue)] focus:border-transparent transition duration-200 ease-in-out resize-y'
            required
            aria-label='Your Message'></textarea>
        </div>
        {/* Submit button */}
        <button
          type='submit'
          className='w-full bg-[var(--obl-blue)] hover:bg-[var(--obl-red)] text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--obl-red)] focus:ring-offset-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={status === 'sending'}
          aria-label='Send Message'>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Web3FormsContactForm;
