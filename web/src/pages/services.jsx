/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPage from '../components/layouts/HeroPage';

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageQ {
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
          eq: "assets/images/services/landscaping-services-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgServiceOne: file(
        relativePath: {
          eq: "assets/images/services/landscaping-design-shrubs-pruning-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgServiceTwo: file(
        relativePath: {
          eq: "assets/images/services/planting-gardening-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgServiceThree: file(
        relativePath: {
          eq: "assets/images/services/mulching-loam-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgServiceFour: file(
        relativePath: {
          eq: "assets/images/services/hardscape-patio-walkway-tools-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgServiceFive: file(
        relativePath: {
          eq: "assets/images/services/fencing-fence-installation-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgServiceSix: file(
        relativePath: {
          eq: "assets/images/services/spring-fall-yard-cleanup-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgServiceOne = data.imgServiceOne.childImageSharp.gatsbyImageData;
  const imgServiceTwo = data.imgServiceTwo.childImageSharp.gatsbyImageData;
  const imgServiceThree = data.imgServiceThree.childImageSharp.gatsbyImageData;
  const imgServiceFour = data.imgServiceFour.childImageSharp.gatsbyImageData;
  const imgServiceFive = data.imgServiceFive.childImageSharp.gatsbyImageData;
  const imgServiceSix = data.imgServiceSix.childImageSharp.gatsbyImageData;

  const services = [
    {
      name: 'Lawn Care & Maintenance',
      image: imgServiceOne,
      alt: 'Hedged bushes designed by a landscaping contractor.',
      items: ['Lawn mowing', 'Weed whacking', 'Pruning shrubs & trees'],
      link: '/',
    },
    {
      name: 'Garden Care & Maintenance',
      image: imgServiceTwo,
      alt: 'A landscaping contractor preparing to plant several shrubs, trees, and flowers.',
      items: ['Planting', 'Weeding', 'Irrigation'],
      link: '/',
    },
    {
      name: 'Mulching & Loam',
      image: imgServiceThree,
      alt: 'A landscaping contractor preparing to spread mulch around the frontyard.',
      items: ['Delivery', 'Spreading', 'Edging'],
      link: '/',
    },
    {
      name: 'Hardscape Construction',
      image: imgServiceFour,
      alt: 'A stone walkway under construction by a hardscaping contractor.',
      items: ['Patios', 'Walkways', 'Retaining walls'],
      link: '/',
    },
    {
      name: 'Fencing Installation',
      image: imgServiceFive,
      alt: 'Wood fencing installed by Braven Landscape & Construction around the yard of a home.',
      items: ['Wood fencing', 'Vinyl fencing', 'Chain link fencing'],
      link: '/',
    },
    {
      name: 'Spring/Fall Cleanup',
      image: imgServiceSix,
      alt: 'A landscaping contractor blowing leaves during a fall clean up.',
      items: ['Raking', 'Blowing', 'Haul away'],
      link: '/',
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
      <HeroPage
        imgHeroBg={imgHeroBg}
        altText="Front yard of a home after professional landscapers from Braven Landscape & Construction mowed and edged."
        headerText="Landscaping, Hardscape, Masonry & Construction Services"
        subheaderText="Check our landscaping & hardscaping construction services for residential homes & commercial businesses"
      />
      <div className="relative bg-green-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h3 className="text-normal font-semibold tracking-wider text-primary uppercase">
            Landscaping, Gardening, Hardscaping, Construction
          </h3>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl sm:max-w-3xl mx-auto">
            Landscaping & Hardscaping Services in Massachusetts
          </h2>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            We offer a variety of landscaping & construction services. Our
            landscaping team is highly experienced and will work with you to
            design a custom landscape that fits your needs. We also offer
            construction services for residential or commercial clients,
            including porches, patios, and walkways.
          </p>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-20"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="py-10">
                  <motion.div
                    ref={ref}
                    variants={itemVariants}
                    className="flow-root bg-gray-50 rounded-lg shadow-lg px-6 pb-8"
                  >
                    <div className="-mt-6 space-y-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-1 bg-primary rounded-md shadow-lg">
                          <GatsbyImage
                            image={service.image}
                            className="rounded-sm overflow-hidden max-h-48"
                            alt={service.alt}
                          />
                        </span>
                      </div>
                      <h3 className="text-2xl font-medium text-gray-900 tracking-tight">
                        {service.name}
                      </h3>
                      {/* <p className="text-base text-gray-500">
                        {service.description}
                      </p> */}
                      <ul className="px-3 list-none list-inside text-left text-lg text-gray-500">
                        {service.items.map((item) => (
                          <li key={item}>
                            <i className="fas fa-check mr-3 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {/* <Link
                        to={service.link}
                        className="text-lg font-medium text-accent hover:text-primary"
                      >
                        Learn More <span aria-hidden="true">&rarr;</span>{' '}
                      </Link> */}
                    </div>
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

export default ServicesPage;
