/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPage from '../components/layouts/HeroPage';
import HeroForm from '../components/layouts/HeroForm';

const SnowRemovalPage = () => {
  const data = useStaticQuery(graphql`
    query SnowRemovalPageQ {
      site {
        siteMetadata {
          company
          siteUrl
          address
          street
          cityState
          zip
          emailDisplay
          owner
          phoneDisplay
        }
      }
      sanitySettingsCompany {
        address
        cityState
        email
        emailHref
        hours
        name
        owner
        phone
        phoneHref
        street
        website
        zip
      }
      sanitySettingsSocials {
        youTube
        twitter
        linkedIn
        instagram
        gmbShare
        gmbEmbed
        gmbCid
        facebook
      }
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/snow-removal/snow-removal-plowing-shoveling-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewOne: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-1.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewTwo: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-2.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewThree: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-3.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewFour: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-4.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewFive: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-5.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewSix: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-6.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewSeven: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-7.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgReviewEight: file(
        relativePath: {
          eq: "assets/images/reviews/reviews-braven-landscape-construction-plympton-ma-8.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgReviewOne = data.imgReviewOne.childImageSharp.gatsbyImageData;
  const imgReviewTwo = data.imgReviewTwo.childImageSharp.gatsbyImageData;
  const imgReviewThree = data.imgReviewThree.childImageSharp.gatsbyImageData;
  const imgReviewFour = data.imgReviewFour.childImageSharp.gatsbyImageData;
  const imgReviewFive = data.imgReviewFive.childImageSharp.gatsbyImageData;
  const imgReviewSix = data.imgReviewSix.childImageSharp.gatsbyImageData;
  const imgReviewSeven = data.imgReviewSeven.childImageSharp.gatsbyImageData;
  const imgReviewEight = data.imgReviewEight.childImageSharp.gatsbyImageData;

  const reviews = [
    {
      image: imgReviewOne,
      alt: '5-star landscaping review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewTwo,
      alt: '5-star lawn care review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewThree,
      alt: '5-star construction review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewFour,
      alt: '5-star fence construction review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewFive,
      alt: '5-star hardscaping review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewSix,
      alt: '5-star walkway review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewSeven,
      alt: '5-star patio review on Google for Braven Landscape & Construction',
    },
    {
      image: imgReviewEight,
      alt: '5-star landscaping review on Google for Braven Landscape & Construction',
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

  const seo = {
    title: 'Landscaping, Lawn Care, Hardscape, Construction Services',
    description:
      'View all our landscaping, lawn care, hardscape, masonry, and construction services for residential homes and commercial businesses. Call for a free estimate.',
    slug: 'https://bravenlandscapeconstruction.com/services/',
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://www.schema.org",
              "@type": "Organization",
              "name": "Braven Landscape & Construction",
              "url": "https://bravenlandscapeconstruction.com/",
              "logo": "https://bravenlandscapeconstruction.com/static/4b6c9ff6361c3712b9eade222697a469/dd260/braven-landscape-construction-plympton-ma-logo.webp",
              "image": "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQDBQcG/8QAFwEAAwEAAAAAAAAAAAAAAAAAAwQFAv/aAAwDAQACEAMQAAABUv8AFtPm7XIBsR1+duFJQlqTmf/EABwQAAMBAAIDAAAAAAAAAAAAAAMEBQIBBgASE//aAAgBAQABBQLjtLLZ6NTCpEt/ULGtg8RTNRgLVmo/HXkscysb01u4Jk9BRkgpoH2CSF3j+n//xAAcEQEAAQQDAAAAAAAAAAAAAAABAAIDERIhIzH/2gAIAQMBAT8BtrjDOwhaqq8mg8rP/8QAGxEAAQUBAQAAAAAAAAAAAAAAAAECAxMhEUH/2gAIAQIBAT8Bo9EdBwvZGmlitxqYf//EACUQAAIBAwIFBQAAAAAAAAAAAAECAwARIRITBAUiMUEUIzNCcf/aAAgBAQAGPwKFQIcuOwOaWcwldY0ai11U+MVuQ8njdXOq+u9L6ciQr02Xsb1tOfcRBcMc3p+Efhorxt9xY1LPIBdj0qfNMzut1GFYYtTNsh8WxUelyO9TSNK24pw1fIT+1//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQXFRsWGBof/aAAgBAQABPyED6l8pr3GNiuqGUo51cZMozmX7xEbTFy9EmR4mo8W91zBI6nA0VdOe42yCpqLl/YJVToV4UQnEAEarvcwfNTojFATQ7JYq5bvL3P/aAAwDAQACAAMAAAAQyDWz/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAITFBkaH/2gAIAQMBAT8QDM1nO35CTJfJtAk+8gDaZ2hP/8QAGxEBAQACAwEAAAAAAAAAAAAAAREAMSFBkaH/2gAIAQIBAT8QiHJDYrr3nFBX64igaQ673ixPGqtmf//EABwQAQEAAwADAQAAAAAAAAAAAAERACExUWFxQf/aAAgBAQABPxAfgTEFVTZ5WMRe5BCnbDYHDsE1jtOsSEK76EZrtm8PoVKoQL1H9E297j0j4QFRD6AvuNIgAwT+hJFuS8wDl5SBOFhEIlUwwBN/sAwjvvzDHFz0Ei7LVvhM3ZGaMgBvxgNUogCSaC9e5SR6i+B0MNcz/9k=",
              "description": "Braven Landscape & Construction is a landscaping company that offers landscaping, hardscaping, and construction services for residential homes and commercial businesses throughout eastern Massachusetts.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "87 County Rd",
                "addressLocality": "Plympton",
                "addressRegion": "MA",
                "postalCode": "02367",
                "addressCountry": "United States"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.9887355538896",
                "longitude": "-70.80773176294025"
              },
              "hasMap": "https://www.google.com/maps?cid=0x89e4bd9ccbd80d9d:0xcf43a23e26480b26",
              "openingHours": "Mo, Tu, We, Th, Fr, Sa 07:00-17:00 Su 10:00-17:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1(781) 243-0516",
                "contactType": "Sales"
              }
            }
          `}
        </script>
      </SEO>
      <HeroForm
        imgHeroBg={imgHeroBg}
        altText="Front yard of a home after professional landscapers from Braven Landscape & Construction mowed and edged."
        headerText="Call For Snow Removal, Snow Plowing, Snow Shoveling Services"
        bullet1="Residential homes, driveways, neighborhoods"
        bullet2="Commercial properties, parking lots & garages"
        bullet3="Trucks, plows, shovels & snow removal equipment"
        bullet4="Fast, reliable, and affordable services"
      />
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h3 className="text-normal font-semibold tracking-wider text-primary uppercase">
            Snow Removal, Snow Plowing, Snow Shoveling
          </h3>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl sm:max-w-3xl mx-auto">
            Why Choose Us for Snow Removal in Massachusetts?
          </h2>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Braven Landscape & Construction are experts in efficient snow
            removal without compromising safety, quality, or your property. We
            pride ourselves on delivering affordable rates and outstanding
            service for all seasons. Contact us today to learn more about our
            snow removal services across Massachusetts.
          </p>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-20"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {reviews.map((review, index) => (
                <div key={index} className="px-4 lg:px-0 space-y-6">
                  <motion.div
                    ref={ref}
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <GatsbyImage
                      image={review.image}
                      className="rounded-sm w-full h-full"
                      alt={review.alt}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default SnowRemovalPage;
