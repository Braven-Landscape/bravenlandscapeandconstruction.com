import React, { useState, useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Container from '../../layouts/Container';

const FormHero = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  });

  const { firstName, lastName, email, phone, service, location, message } =
    contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.form
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      name="form-hero"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="relative bg-primary p-4 lg:p-8 rounded-xl shadow-xl max-w-4xl mx-3 lg:mx-auto"
      id="form-hero"
      action="/thank-you/"
    >
      <div className="mb-8 space-y-6">
        <p className="text-4xl font-bold text-accent text-center">
          Call Now{' '}
          <a href="tel:+17812430516" className="text-accent block">
            (781) 243-0516
          </a>
        </p>
        <p className="text-sm italic text-gray-100 text-center">
          Or fill out our form and we'll call as soon as possible
        </p>
      </div>
      <input type="hidden" name="form-name" value="form-hero" />

      <div className="grid grid-cols-1 grid-rows-8 gap-y-6 gap-x-4 sm:grid-cols-2 sm:grid-rows-3">
        <div>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <select
            name="service"
            as="select"
            value={service}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
          >
            <option value="" disabled hidden>
              Service of Interest...
            </option>
            <option value="Landscaping: Lawn Care, Mowing, Mulching, etc.">
              Landscaping: Lawn Care, Mowing, Mulching, etc.
            </option>
            <option value="Hardscaping: Patio" className="bg-gray-100">
              Hardscaping: Patio
            </option>
            <option value="Hardscaping: Walkway">Hardscaping: Walkway</option>
            <option value="Construction: Fences" className="bg-gray-100">
              Construction: Fencing
            </option>
            <option value="Seasonal: Spring/Fall Clean Up">
              Seasonal: Spring/Fall Clean Up
            </option>
            <option value="Seasonal: Snow Removal" className="bg-gray-100">
              Seasonal: Snow Removal
            </option>
          </select>
        </div>
        <div>
          <input
            name="location"
            type="text"
            value={location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-6">
        <textarea
          name="message"
          rows="3"
          value={message}
          onChange={handleChange}
          placeholder="Please leave a detailed message..."
          required
          className="shadow-sm focus:ring-primary focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="text-center mt-8 mb-4 lg:mt-8">
        <button
          className="inline-flex items-center py-3 px-6 bg-accent hover:bg-gray-700 text-lg font-medium text-white hover:text-white border border-transparent hover:border-gray-100 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform"
          type="submit"
          value="Submit"
        >
          <span className="drop-shadow-text">Submit Inquiry</span>
        </button>
      </div>
    </motion.form>
  );
};

export default FormHero;
