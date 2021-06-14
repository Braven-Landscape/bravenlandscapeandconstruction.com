import React, { useState, useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Container from '../../layouts/Container';

const FormFooter = () => {
  const heroSettings = {
    bgOverlay: 'bg-gray-500',
    bgImgAlt:
      'Front yard of home with porch and garden, landscaping done by Braven Landscape & Construction in Plympton, MA',
  };

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    findUs: '',
    message: '',
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    service,
    findUs,
    message,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const data = useStaticQuery(graphql`
    query FormFooterQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/contact/landscaping-hardscape-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

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
    <Container type="full" containerStyling="relative py-24">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          className="w-full h-full object-cover"
          alt={heroSettings.bgImgAlt}
        />
        <div
          className={`absolute inset-0 ${heroSettings.bgOverlay}`}
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <motion.form
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        name="form-footer"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="relative bg-primary p-10 lg:p-16 rounded-xl shadow-xl max-w-4xl mx-auto"
        id="form-footer"
      >
        <div className="space-y-6 mb-16">
          <p className="text-4xl font-bold text-accent text-center mb-1 mt-4 mt-md-0">
            Contact Us Today
          </p>
          <p className="text-xl font-italic text-gray-100 text-center pb-10 border-b-2 border-accent">
            Let's schedule a free estimate for your next landscaping project.
          </p>
        </div>
        <input type="hidden" name="form-name" value="form-footer" />

        <div className="grid grid-cols-1 grid-rows-8 gap-y-6 gap-x-4 sm:grid-cols-2 sm:grid-rows-4">
          <div className="">
            <div className="">
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                name="phone"
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                name="company"
                type="text"
                value={company}
                onChange={handleChange}
                placeholder="Company"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <select
                name="service"
                as="select"
                value={service}
                onChange={handleChange}
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="" disabled hidden>
                  Service of Interest...
                </option>
                <option value="New Application Development">
                  New Application Development
                </option>
                <option
                  value="Legacy Application Transformation"
                  className="bg-light"
                >
                  Legacy Application Transformation
                </option>
                <option value="Healthcare Software Solutions">
                  Healthcare Software Solutions
                </option>
                <option
                  value="Financial Application Solutions"
                  className="bg-light"
                >
                  Financial Application Solutions
                </option>
                <option value="Website Design & Development">
                  Website Design & Development
                </option>
                <option
                  value="Mobile Apps - iOS and Android"
                  className="bg-light"
                >
                  Mobile Apps - iOS and Android
                </option>
              </select>
            </div>
          </div>
          <div className="">
            <div controlId="formFooterFindUs">
              <select
                name="findUs"
                as="select"
                value={findUs}
                onChange={handleChange}
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="" disabled hidden>
                  How Did You Find Us?
                </option>
                <option value="Facebook" className="bg-light">
                  Facebook
                </option>
                <option value="Family/Friend">Family/Friend</option>
                <option value="Google/Bing" className="bg-light">
                  Google/Bing
                </option>
                <option value="Referral">Referral</option>
                <option
                  value="Website (Yellowpages, etc.)"
                  className="bg-light"
                >
                  Directory (Yellowpages, etc.)
                </option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="">
              <textarea
                name="message"
                rows="1"
                value={message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="text-gray-100 text-sm my-10">
          <p>
            <span className="text-red-500">*</span> All Fields Required
          </p>
          <p>
            <span className="text-red-500">*</span> Your information will never
            be shared with anyone else.
          </p>
        </div>
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center py-3 px-6 bg-accent hover:bg-gray-700 text-lg font-medium text-white hover:text-white border border-transparent hover:border-gray-100 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform"
            type="submit"
            value="Submit"
          >
            <span>Submit Inquiry</span>
          </button>
        </div>
      </motion.form>
    </Container>
  );
};

export default FormFooter;
