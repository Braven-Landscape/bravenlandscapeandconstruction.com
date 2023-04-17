import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const ServiceOne = ({
  street,
  city,
  stateAbbr,
  stateFull,
  zip,
  mapUrl,
  phone,
}) => {
  const data = useStaticQuery(graphql`
    query ServiceOneQ {
      sanitySettingsCompany {
        phone
        phoneHref
      }
      imgBeforeAfter: file(
        relativePath: {
          eq: "assets/images/home/lawn-care-services-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const imgBeforeAfter = data.imgBeforeAfter.childImageSharp.gatsbyImageData;

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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-white overflow-hidden py-24"
    >
      <div className="relative max-w-7xl mx-auto lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <motion.div
              ref={ref}
              variants={itemVariants}
              className="relative text-base mx-auto max-w-prose lg:max-w-none rounded-lg shadow-lg overflow-hidden"
            >
              <figure>
                <div>
                  <GatsbyImage
                    image={imgBeforeAfter}
                    imgClassName="object-cover object-center"
                    className="w-full h-96 sm:h-full"
                    alt="Landscaping contractor with a lawn mower preparing for lawn care services"
                  />
                </div>
              </figure>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="mt-8 lg:mt-5"
          >
            <div className="text-lg text-gray-600 max-w-prose mx-auto lg:max-w-none space-y-6">
              <motion.div ref={ref} variants={itemVariants}>
                <h3 className="text-base text-gray-900 font-semibold tracking-wide uppercase">
                  Landscaping For Residential Homes & Commercial Businesses
                </h3>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-5xl">
                  Landscaping & Lawn Care Services in {city}, {stateAbbr} {zip}
                </h2>
              </motion.div>
              <p className="pt-4">
                We provide landscaping, lawn care, and lawn mowing services to
                residential homes and commercial properties throughout the
                Massachusetts area.
              </p>
              <p>
                Our team is well-trained, experienced, and knowledgeable in all
                aspects of lawn care. We have the equipment necessary to get
                your property looking its best.
              </p>
              <ul className="space-y-6">
                <li>
                  <strong>Lawn Care & Mowing</strong>: Whether you want a
                  monthly schedule or just a need one-time service, we can help
                  make your lawn look its best. For quality landscape design,
                  weed whacking, and maintenance, our team is here to help.
                </li>
                <li>
                  <strong>Tree & Shrubbery Trimming</strong>: Trimming trees and
                  pruning shrubs can make a big difference in the appearance of
                  your yard. Let's design your shrubs to give an overall elegant
                  feel to your yard.
                </li>
                <li>
                  <strong>Mulching</strong>: Mulching is a crucial part of yard
                  maintenance because it helps to reduce water loss from the
                  soil surface, recycle nutrients for plants, and insulate the
                  ground against extreme heat or cold. Let us help you suppress
                  weed growth while giving your lawn that clean, finished look.
                </li>
              </ul>
              <p className="italic pt-6">
                You deserve a clean and healthy yard for you and your family to
                enjoy! Let us help you maintain it with our affordable rates.
              </p>
              <p className="text-2xl py-5">
                Call today for more information:{' '}
                <a href={`tel:${phone}`} className="no-underline">
                  <span className="text-yellow-500 hover:text-yellow-300 font-bold">
                    {phone}
                  </span>
                </a>
              </p>
            </div>
            <div className="mt-10">
              <Button
                type="internal"
                btnLink="/services/"
                btnLabel="See Landscaping Services"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceOne;
