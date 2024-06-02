"use client"
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      if (response.status === 200) {
        alert('Submission successful');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Submission failed');
    }
  };

  return (
    <div>
      {/* Contact Section */}
      <div className="relative flex items-center justify-center h-screen bg-gray-100 sm:h-96">
        {/* Text Section */}
        <div className="absolute left-0 rounded-r-[120px] p-8 bg-white bg-opacity-75 z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">ZENEX</span>
          </h1>
        </div>

        {/* Video Background Section */}
        <video className="absolute inset-0 w-full h-full object-cover z-0 fade-down" autoPlay loop muted>
          <source src="/1851190-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contact Form Section */}
      <div className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address Section */}
              <div className="h-full pr-6">
                <h1 className="mb-4 text-2xl font-bold dark:text-white text-center">
                  We are here
                </h1>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3742.0250708233516!2d85.8631522752369!3d20.299229381173813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE3JzU3LjIiTiA4NcKwNTEnNTYuNiJF!5e0!3m2!1sen!2sin!4v1716156031466!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <ul className="mt-6 space-y-6">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Address</h3>
                      <p className="text-gray-600 dark:text-slate-400">Prachi Vihar, Palasuni Rasulgarh, Bhubaneswar, Odisha-751025</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h3>
                      <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9040401533</p>
                      <p className="text-gray-600 dark:text-slate-400">Mail: zenexinfo19@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Working hours</h3>
                      <p className="text-gray-600 dark:text-slate-400">Monday - Saturday: 09:00 - 18:30</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="Your email"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-blue-600 py-2 px-4 text-white font-bold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
