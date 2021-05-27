import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const CtaHome = () => {
  const data = useStaticQuery(graphql`
    query CtaHomeQ {
      sanitySettingsCompany {
        email
        emailHref
        phone
        phoneHref
      }
      imgCta: file(
        relativePath: {
          eq: "assets/images/home/gardening-contractor-landscaping-contractor-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const imgCta = data.imgCta.childImageSharp.gatsbyImageData;

  const variants = {
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
    <motion.div
      ref={ref}
      variants={variants}
      initial={'hidden'}
      animate={controls}
      transition={{ duration: 0.5, delay: 0 }}
      className="relative bg-gray-800"
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial={'hidden'}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
      >
        <GatsbyImage
          image={imgCta}
          className="w-full h-full object-cover"
          alt="Gardening services, planting flowers by Braven Landscape & Construction"
        />
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:ml-auto md:w-1/2 md:pl-10"
        >
          <h3 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            High Quality Landscaping Services
          </h3>
          <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Schedule Your Free Quote Today
          </h2>
          <p className="mt-3 text-lg text-gray-300">
            Scheduling your free estimate is easy! Just fill out the online form
            below and we will contact you to schedule a time.
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Can't wait? Call us at{' '}
            <a
              href={company.phoneHref}
              target="_blank"
              className="text-yellow-500 hover:text-yellow-300 font-bold"
            >
              {company.phone}
            </a>
            .
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Hate contact forms? Email us at{' '}
            <a
              href={company.emailHref}
              target="_blank"
              className="text-yellow-500 hover:text-yellow-300 font-bold"
            >
              {company.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Button type="internal" />
            </div>
          </div>
          <p className="mt-14 text-sm text-green-100">
            * The free estimate is usually scheduled within one day of
            completing, submitting and receiving your information. As a courtesy
            to our clients we schedule these estimates as quickly as possible.
          </p>
          <p className="mt-3 text-sm text-green-100">
            * If you'd like to cancel or change your appointment, please give us
            24 hours notice.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CtaHome;
