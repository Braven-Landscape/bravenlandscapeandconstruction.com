import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const heroSettings = {
  bgOverlay: 'bg-gray-500',
  bgImgAlt:
    'Front yard of home with porch and garden, landscaping done by Braven Landscape & Construction in Plympton, MA',
};

const content = {
  headline: 'Your complete landscape and construction solution',
  subHeadline:
    'is a team of professionals dedicated to providing high-quality landscape & construction services.',
};

const HeroHome = () => {
  const data = useStaticQuery(graphql`
    query HeroHomeQ {
      site {
        siteMetadata {
          primaryColorLight
        }
      }
      sanitySettingsCompany {
        name
        cityState
      }
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/home/home-garden-porch-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;

  const metadata = data.site.siteMetadata;
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

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
    //  <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative max-h-screen">
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
        ></div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.h1
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl font-extrabold tracking-tight text-heroHeadline sm:text-5xl lg:text-6xl drop-shadow-darker capitalize"
        >
          {content.headline}
        </motion.h1>
        <motion.p
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl font-semibold text-green-50 max-w-3xl mx-auto drop-shadow-darker"
        >
          <motion.strong
            initial={{ color: '#E0E7FF' }}
            animate={{ color: `${metadata.primaryColorLight}` }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {company.name}
          </motion.strong>{' '}
          {content.subHeadline}
        </motion.p>
        <motion.p
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-xl font-semibold text-green-50 max-w-3xl mx-auto drop-shadow-darker"
        >
          We are conveniently located in{' '}
          <motion.strong
            initial={{ color: '#E0E7FF' }}
            animate={{ color: `${metadata.primaryColorLight}` }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {company.cityState}
          </motion.strong>
          .
        </motion.p>
        {/* <p className="mt-3 text-xl text-yellow-300 max-w-3xl font-bold">
          We use only the finest products in the industry because we believe
          that <em>you deserve the best</em>.
        </p> */}
        <motion.div
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="flex mt-10"
        >
          <div className="col-1 gap-4 mx-auto">
            <Button type="internal" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroHome;
