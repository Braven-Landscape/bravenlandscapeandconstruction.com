import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const heroSettings = {
  bgOverlay: 'bg-gray-500',
  bgImgAlt:
    'Front yard of home with walkway and patio, landscaping done by Braven Landscape & Construction in Plympton, MA',
};

const content = {
  headline: 'Contact us today to schedule your free estimate',
  subHeadline: 'Give us a call at',
};

const CtaServiceOneHome = () => {
  const data = useStaticQuery(graphql`
    query CtaServiceOneHomeQ {
      site {
        siteMetadata {
          primaryColorLight
        }
      }
      sanitySettingsCompany {
        name
        cityState
        phone
        phoneHref
      }
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/home/lawn-care-mowing-braven-landscape-construction-plympton-ma.jpg"
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
    <div className="relative">
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
      <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl font-extrabold tracking-tight text-heroHeadline sm:text-5xl lg:text-6xl drop-shadow-darker capitalize"
        >
          {content.headline}
        </motion.h2>
        <motion.p
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-3xl font-semibold text-white max-w-3xl mx-auto drop-shadow-darker"
        >
          {content.subHeadline}{' '}
          <a
            href={company.phoneHref}
            className="text-accent hover:text-primary"
          >
            {company.phone}
          </a>{' '}
          or fill out our form.
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
          <div className="col-1 gap-4 mx-auto">
            <Button type="internal" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaServiceOneHome;
