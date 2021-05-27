import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../common/Button';

const HeroPage = ({ imgHeroBg, altText, headerText, subheaderText }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
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
    <div className="relative">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          className="w-full h-full object-cover"
          alt={altText}
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gray-500"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        ></div>
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial={'hidden'}
        animate={controls}
        transition={{ duration: 0.5, delay: 0 }}
        className="relative mx-auto text-center max-w-4xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <motion.h1
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {headerText}
        </motion.h1>
        <motion.p
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-xl mx-auto text-center text-indigo-100 max-w-3xl"
        >
          {subheaderText}
        </motion.p>
        <motion.div
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex mt-10"
        >
          <div className="col-1 gap-4 mx-auto">
            <Button type="internal" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroPage;
