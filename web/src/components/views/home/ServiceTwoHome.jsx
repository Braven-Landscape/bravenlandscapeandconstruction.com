import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../../common/Button';

const ServiceTwoHome = () => {
  const data = useStaticQuery(graphql`
    query ServiceTwoHomeQ {
      site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
      imgBeforeAfter: file(
        relativePath: {
          eq: "assets/images/home/home-services-section-company-location.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const metadata = data.site.siteMetadata;
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
      initial={'hidden'}
      animate={controls}
      className="bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <motion.div
          ref={ref}
          variants={itemVariants}
          className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
        >
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Headline
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Another Headline
            </h3>
          </div>
        </motion.div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
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
                    alt="Hair"
                  />
                </div>
              </figure>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="mt-8 lg:mt-0"
          >
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quos temporibus animi ratione facilis. Optio sed provident
                dignissimos consectetur maiores modi quo neque exercitationem,
                eligendi id minima ea, amet aliquam?
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                tenetur praesentium omnis et fugiat fugit quidem quos ipsa
                commodi eligendi explicabo animi quia, corporis esse maiores
                atque recusandae necessitatibus mollitia?
              </p>
              <ul>
                <li>
                  <strong>Service</strong>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Necessitatibus temporibus
                  recusandae aperiam debitis, delectus ex molestiae quibusdam.
                  Magnam, quasi aliquid nulla odio architecto doloribus
                  voluptates, blanditiis, deserunt atque id commodi!
                </li>
                <li>
                  <strong>Service</strong>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Necessitatibus temporibus
                  recusandae aperiam debitis, delectus ex molestiae quibusdam.
                  Magnam, quasi aliquid nulla odio architecto doloribus
                  voluptates, blanditiis, deserunt atque id commodi!
                </li>
                <li>
                  <strong>Service</strong>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Necessitatibus temporibus
                  recusandae aperiam debitis, delectus ex molestiae quibusdam.
                  Magnam, quasi aliquid nulla odio architecto doloribus
                  voluptates, blanditiis, deserunt atque id commodi!
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                illo tenetur ab facere excepturi. Placeat minima libero hic ipsa
                ipsum, impedit dolorem repellat? Dolorem atque blanditiis natus
                quibusdam? Architecto, quod?
              </p>
              <h3>
                Give Us A Call:{' '}
                <a href={metadata.phoneHref} className="no-underline">
                  <span className="text-yellow-500 hover:text-yellow-300 font-bold">
                    {metadata.phoneDisplay}
                  </span>
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                exercitationem rem maxime dolorum ipsum cumque vel ut quisquam
                maiores voluptate. Amet mollitia iste ad veritatis nobis
                assumenda numquam temporibus eligendi?
              </p>
              <p className="text-lg">
                <em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </em>
              </p>
            </div>
            <div className="mt-10">
              <Button
                type="internal"
                btnLink="/landscaping-services/"
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
