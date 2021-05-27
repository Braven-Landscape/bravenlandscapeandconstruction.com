/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPage from '../components/layouts/HeroPage';

const ConstructionServicesPage = () => {
  const data = useStaticQuery(graphql`
    query ConstructionServicesPageQ {
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
          eq: "assets/images/construction-services/construction-services-braven-landscape-construction-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgFeatureOne: file(
        relativePath: {
          eq: "assets/images/home/features-gardening-braven-landscape-construction-plympton-ma.jpg"
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
      imgFeatureTwo: file(
        relativePath: {
          eq: "assets/images/home/features-landscaping-braven-landscape-construction-plympton-ma.jpg"
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
      imgFeatureThree: file(
        relativePath: {
          eq: "assets/images/home/features-construction-braven-landscape-construction-plympton-ma.jpg"
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
  const metadata = data.site.siteMetadata;
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgFeatureOne = data.imgFeatureOne.childImageSharp.gatsbyImageData;
  const imgFeatureTwo = data.imgFeatureTwo.childImageSharp.gatsbyImageData;
  const imgFeatureThree = data.imgFeatureThree.childImageSharp.gatsbyImageData;

  const features = [
    {
      name: 'Service #1',
      image: imgFeatureOne,
      description:
        'Our gardening services will make your yard looks great and help it be more environmentally friendly. We know what plants and flowers to use, how many trees to plant, where they should be situated, and how to nurture them with fertilizers and compost. Turn your yard into a beautiful garden today.',
      link: '/',
    },
    {
      name: 'Service #2',
      image: imgFeatureTwo,
      description:
        'Our landscaping services will make your yard the envy of the neighborhood. We offer a variety of services including design, installation, and maintenance to ensure that your landscape is always picture perfect. Our designers will work with you to create an outdoor oasis that reflects your personal style and tastes.',
      link: '/',
    },
    {
      name: 'Service #3',
      image: imgFeatureThree,
      description:
        'Our construction services will turn your property into your own personal paradise. From designing the perfect outdoor living space to installing a cozy fire pit, we’ve got you covered. Porches, patios, and stone walkways are our specialty. Let us build the outdoor living space of your dreams!',
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
    title: 'Landscaping, Lawn Care, Construction Services',
    description:
      'We offer landscaping, lawn care, construction services in Plymouth County. Call today for a free estimate to achieve your vision for your home or business!',
    slug: '/construction-services/',
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
            '@context': 'https://schema.org',
						'@type': 'Organization',
						'@id': ${company.website}${seo.slug},
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': ${company.cityState},
              'postalCode': ${company.zip},
              'streetAddress': ${company.street}
            },
            'email': ${company.email},
            'member': [
              {
                '@type': 'Organization'
              },
              {
                '@type': 'Organization'
              }
            ],
            'alumni': [
              {
                '@type': 'Person',
                'name': ${company.owner}
              },
            ],
            'name': ${company.name},
            'telephone': ${company.phone}
          }`}
        </script>
      </SEO>
      <HeroPage
        imgHeroBg={imgHeroBg}
        headerText="Our Construction Services"
        subheaderText="Check our construction services for residential homes & commercial businesses"
      />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative bg-green-50 py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h3 className="text-base font-semibold tracking-wider text-primary uppercase">
            Gardening, Landscaping, Construction
          </h3>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Landscaping Services in Massachusetts
          </h2>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            We offer a variety of landscaping & construction services. Our
            landscaping team is highly experienced and will work with you to
            design a custom landscape that fits your needs. We also offer
            construction services for residential or commercial clients,
            including porches, patios, and walkways.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <motion.div
                    ref={ref}
                    variants={itemVariants}
                    className="flow-root bg-gray-50 rounded-lg shadow-lg px-6 pb-8"
                  >
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-1 bg-primary rounded-md shadow-lg">
                          <GatsbyImage
                            image={feature.image}
                            className="rounded-sm overflow-hidden"
                            alt="About"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="my-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                      <Link
                        to={feature.link}
                        className="text-lg font-medium text-accent hover:text-primary"
                      >
                        Learn More <span aria-hidden="true">&rarr;</span>{' '}
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ConstructionServicesPage;
