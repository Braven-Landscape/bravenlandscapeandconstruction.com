import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../common/Button';
import Grid from './Grid';
import Col from './Col';
import ContainerNew from './ContainerNew';
import Flex from './Flex';
import FormHero from '../common/forms/formHero';

const HeroForm = ({
  imgHeroBg,
  altText,
  headerText,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  subheaderText,
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
    <div className="relative flex flex-col place-content-center place-items-center lg:h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          alt={altText}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gray-500"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <Grid classes="lg:grid-cols-2 gap-4 max-w-7xl mx-auto mt-10 lg:mt-0">
        <Flex classes="flex-col justify-start relative text-center lg:text-left">
          <motion.h1
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-4xl font-extrabold tracking-tight text-heroHeadline sm:text-4xl lg:text-5xl drop-shadow-darker capitalize mx-3 lg:mx-0"
          >
            {headerText}
          </motion.h1>
          <motion.ul
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left mx-3 lg:mx-0 mt-10 text-xl sm:text-xl lg:text-2xl font-semibold text-white drop-shadow-darker space-y-6"
          >
            <li className="flex flex-row">
              <i className="fas fa-check mr-3 text-accent" />
              <h2>{bullet1}</h2>
            </li>
            <li className="flex flex-row">
              <i className="fas fa-check mr-3 text-accent" />
              <h2>{bullet2}</h2>
            </li>
            <li className="flex flex-row">
              <i className="fas fa-check mr-3 text-accent" />
              <h2>{bullet3}</h2>
            </li>
            <li className="flex flex-row">
              <i className="fas fa-check mr-3 text-accent" />
              <h2>{bullet4}</h2>
            </li>
          </motion.ul>
          {/* <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="flex mt-10"
          >
            <div className="mx-auto lg:mx-0 max">
              <Button
                type="internal"
                btnLabel={btnLabel}
                btnLink={btnLink}
                idName="ctaHeroFormBtn"
              />
            </div>
          </motion.div> */}
        </Flex>
        <Flex classes="flex-col justify-center relative mx-auto lg:max-w-lg my-10 lg:my-0">
          <div className="overflow-hidden">
            <FormHero formName="form-hero" />
          </div>
        </Flex>
      </Grid>
    </div>
  );
};

export default HeroForm;
