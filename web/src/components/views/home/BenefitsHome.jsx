/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import StopwatchIcon from '../../../assets/graphics/stopwatch.svg';
import BadgeIcon from '../../../assets/graphics/badge.svg';
import EstateIcon from '../../../assets/graphics/estate.svg';

const BenefitsHome = () => {
  const benefits = [
    {
      name: 'Fast & Efficient',
      description:
        "We're experienced & skilled, landscaping professionals who get the job done right and on time.",
    },
    {
      name: 'High-Quality Results',
      description: `High quality and affordable landscaping services, uniquely tailor to your needs and desires.`,
    },
    {
      name: 'Added Curb Appeal',
      description: `Transform your outdoor living spaces to add curb appeal and increase your property value.`,
    },
  ];

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
    <div className="relative bg-gray-200 py-16 sm:py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h3 className="text-normal font-semibold tracking-wider text-primary uppercase">
          You deserve the best lawn in the neighborhood
        </h3>
        <h2 className="mt-2 capitalize text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Let us handle all the hard work
        </h2>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            <div className="pt-6">
              <motion.div
                ref={ref}
                variants={itemVariants}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="">
                  <div className="">
                    <StopwatchIcon className="h-40 w-40 mx-auto text-primary fill-current" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mt-8 text-3xl font-medium text-gray-800">
                      <span className="">{benefits[0].name}</span>
                    </h3>
                    <p className="mt-5 mb-8 text-xl text-gray-500 italic">
                      <span className="">{benefits[0].description}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="pt-6">
              <motion.div
                ref={ref}
                variants={itemVariants}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="">
                  <div className="">
                    <BadgeIcon className="h-40 w-40 mx-auto text-primary fill-current" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mt-8 text-3xl font-medium text-gray-800">
                      <span className="">{benefits[1].name}</span>
                    </h3>
                    <p className="mt-5 text-xl text-gray-500 italic">
                      <span className="">{benefits[1].description}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="pt-6">
              <motion.div
                ref={ref}
                variants={itemVariants}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="">
                  <div className="">
                    <EstateIcon className="h-40 w-40 mx-auto text-primary fill-current" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mt-8 text-3xl font-medium text-gray-800">
                      <span className="">{benefits[2].name}</span>
                    </h3>
                    <p className="mt-5 text-xl text-gray-500 italic">
                      <span className="">{benefits[2].description}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BenefitsHome;
