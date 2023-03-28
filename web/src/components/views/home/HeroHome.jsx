import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const heroSettings = {
  bgOverlay: 'bg-gray-500',
  bgImgAlt:
    'The front yard of a home with a porch and garden. Landscaping was done by Braven Landscape & Construction in Plympton, MA.',
};

const content = {
  headline: 'Landscaping, Hardscape, Masonry & Construction in Massachusetts',
  subHeadline:
    'is a team of professional landscape designers & lawn care experts.',
};

function HeroHome() {
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
    <div className="relative lg:max-h-screen">
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
      <div className="relative max-w-7xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        <div className="text-center lg:text-left">
          <motion.h1
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-4xl font-extrabold tracking-tight text-heroHeadline sm:text-5xl lg:text-6xl drop-shadow-darker capitalize justify-start"
          >
            {content.headline}
          </motion.h1>
          <motion.p
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-xl sm:text-2xl lg:text-3xl font-semibold text-white max-w-3xl mx-auto drop-shadow-darker"
          >
            {company.name} {content.subHeadline}
          </motion.p>
          <motion.div
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
            <div className="col-1 gap-4 mx-auto lg:mx-0">
              <Button type="internal" idName="ctaHeroHomeBtn" />
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 lg:mt-0 mx-auto w-full h-full drop-shadow-darker"
        >
          <iframe
            // width="100%"
            // height="315"
            src="https://www.youtube.com/embed/_8MySYa7KMg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-full"
          />
        </motion.div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HeroHome;
