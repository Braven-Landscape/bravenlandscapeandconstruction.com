import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../common/Button';

const HeroContact = ({
  imgHeroBg,
  altText,
  headerText,
  subheaderTextOne,
  subheaderTextTwo,
  btnLabel,
  btnLink,
}) => {
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
        />
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0 }}
        className="relative mx-auto text-center max-w-4xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <motion.h1
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-heroHeadline sm:text-5xl lg:text-6xl drop-shadow-darker capitalize"
        >
          {headerText}
        </motion.h1>
        <motion.p
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-xl sm:text-2xl lg:text-3xl font-semibold text-white max-w-3xl mx-auto drop-shadow-darker"
        >
          {subheaderTextOne}
        </motion.p>
        <motion.p
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-2 text-base italic sm:text-lg lg:text-xl font-normal text-white max-w-3xl mx-auto drop-shadow-darker"
        >
          {subheaderTextTwo}
        </motion.p>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex mt-10"
        >
          <div className="col-1 gap-4 mx-auto">
            <Button
              type="external"
              btnLabel={btnLabel}
              btnLink={btnLink}
              idName="ctaHeroContactCallNowBtn"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContact;
