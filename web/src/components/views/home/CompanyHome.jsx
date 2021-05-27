import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CompanyHome = () => {
  const settings = {
    testimonialBg: 'bg-primary',
    quoteColor: 'text-accent',
    authorTextColor: 'text-accent',
  };

  const data = useStaticQuery(graphql`
    query CompanyHomeQ {
      site {
        siteMetadata {
          company
          cityState
        }
      }
      sanitySettingsCompany {
        name
        cityState
      }
      imgCompany: file(
        relativePath: {
          eq: "assets/images/home/landscaping-contractor-brick-walkway-braven-landscape-construction-plympton-ma.jpg"
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
  const imgCompany = data.imgCompany.childImageSharp.gatsbyImageData;

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
      initial={'hidden'}
      animate={controls}
      transition={{ duration: 0.5, delay: 0 }}
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <motion.div
              ref={ref}
              variants={itemVariants}
              className="relative rounded-lg shadow-lg overflow-hidden"
            >
              <div>
                <GatsbyImage
                  image={imgCompany}
                  className="z-10 lg:h-full h-96 w-full object-cover object-center"
                  imgClassName="absolute inset-0 sm:h-full h-64 w-full object-cover object-center"
                  alt="Braven Landscaping & Construction contractor laying down bricks and stone for a walkway to a backyard patio."
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={itemVariants}
          className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
        >
          {/* <!-- Content area --> */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-primary font-extrabold tracking-tight sm:text-4xl">
              {company.name}: Designing And Building Environmentally Friendly
              Outdoor Spaces
            </h2>
            <div className="mt-10 text-gray-500 space-y-6">
              <p className="text-lg">
                {company.name} is a gardening, landscaping, and construction
                company located in {company.cityState}. Our landscaping
                contractors service residential homes and commercial businesses,
                focusing on outdoor living spaces, landscape design, lawn care,
                and yard maintenance.
              </p>
              <h3 className="text-gray-800 font-semibold">
                Licensed Professionals
              </h3>
              <p className="text-base leading-7">
                We employ a team of licensed professionals who take pride in
                their work and the expertise they offer. They can help identify
                your needs then work to make sure you have a space that's
                perfect for the way you live.
              </p>
              <h3 className="text-gray-800 font-semibold">
                Environmentally Friendly
              </h3>
              <p className="text-base leading-7">
                We believe it's important to be environmentally friendly as we
                design and build outdoor spaces. We use sustainable materials,
                energy-efficient lighting, and water-saving irrigation systems
                that are considered low-flow or even drought tolerant.
              </p>
              <h3 className="text-gray-800 font-semibold">
                Quality Workmanship
              </h3>
              <p className="text-base leading-7">
                Quality workmanship has always been a cornerstone of our
                landscaping business. We're committed to building a relationship
                with each customer, and making sure they feel included every
                step of the way as we build and design their dream space.
              </p>
            </div>
            <div className="mt-20">
              <Link
                to="/about/"
                className="text-lg font-medium text-accent hover:text-primary"
              >
                {' '}
                Learn more about {company.name}{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHome;
