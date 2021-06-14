import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const ServiceTwoHome = () => {
  const data = useStaticQuery(graphql`
    query ServiceTwoHomeQ {
      sanitySettingsCompany {
        phone
        phoneHref
      }
      imgBeforeAfter: file(
        relativePath: {
          eq: "assets/images/home/circular-patio-walkway-hardscape-braven-landscape-construction-plympton-ma.jpg"
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
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="relative lg:row-start-1 lg:col-start-1">
            <motion.div
              ref={ref}
              variants={itemVariants}
              className="relative text-base mx-auto max-w-prose lg:max-w-none rounded-lg shadow-lg overflow-hidden"
            >
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <GatsbyImage
                    image={imgBeforeAfter}
                    imgClassName="object-cover object-center"
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
              <motion.div
                ref={ref}
                variants={itemVariants}
                className="lg:col-start-2"
              >
                <h3 className="text-base text-gray-900 font-semibold tracking-wide uppercase">
                  Paved Patios, Brick Walkways & Fencing
                </h3>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-5xl">
                  Hardscape & Construction Services
                </h2>
              </motion.div>
              <p className="pt-4">
                We provide hardscaping, patio, walkway, and fence construction
                services to residential homes and commercial properties
                throughout the Massachusetts area.
              </p>
              <p>
                Our team of hardscaping and construction professionals have the
                knowledge, experience, equipment and creativity to satisfy any
                customer's needs for their property.
              </p>
              <ul className="space-y-6">
                <li>
                  <strong>Patios</strong>: Every patio is designed to suit your
                  needs. We take into account the size of your yard as well as
                  any architectural features you want to highlight or hide. From
                  patios with built-in fireplaces to just a private space for
                  you and your family, we will build a beautiful outdoor space.
                </li>
                <li>
                  <strong>Walkways</strong>: We design walkways that are
                  carefully aligned with your house to give you an outdoor space
                  that feels connected. You can choose from materials such as
                  brick, stone pavers, gravel and sand to create textures and
                  levels in your landscape.
                </li>
                <li>
                  <strong>Fences</strong>: Add some privacy to your yard by
                  installing a fence. Fences give your yard character, amplify
                  the beauty of trees and gardens, provide security for you home
                  and pets, hide unsightly features from view, and help prevent
                  trespassing by others on your property. From classy picket
                  style fencing to rustic wood, we have what you need to match
                  your style.
                </li>
              </ul>
              <p className="italic pt-6">
                You deserve a beautiful outdoor living space for you and your
                family to enjoy! Let us help you build it with our affordable
                rates.
              </p>
              <p className="text-2xl py-5">
                Call today for more information:{' '}
                <a href={company.phoneHref} className="no-underline">
                  <span className="text-yellow-500 hover:text-yellow-300 font-bold">
                    {company.phone}
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

export default ServiceTwoHome;
