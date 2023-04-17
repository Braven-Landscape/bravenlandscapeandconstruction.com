import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroContact from '../components/layouts/HeroContact';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQ {
      site {
        siteMetadata {
          company
          phoneDisplay
          phoneHref
          emailDisplay
          emailHref
          address
          cityState
          gmbCID
          gmbEmbedSrc
          siteUrl
          street
          zip
          owner
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
          eq: "assets/images/contact/contact-us-free-quote-braven-landscape-construction-plympton-ma.jpg"
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

  const location = {
    street: '87 County Rd',
    city: 'Plympton',
    stateAbbr: 'MA',
    stateFull: 'Massachusetts',
    zip: '02367',
    mapUrl:
      'https://www.google.com/maps/place/Braven+Landscape+%26+Construction/@41.9886533,-70.807675,15z/data=!4m6!3m5!1s0x89e4bd9ccbd80d9d:0xcf43a23e26480b26!8m2!3d41.9886533!4d-70.807675!16s%2Fg%2F11q96pynds?coh=164777&entry=tt&shorturl=1',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11862.165932860273!2d-70.807675!3d41.9886533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4bd9ccbd80d9d%3A0xcf43a23e26480b26!2sBraven%20Landscape%20%26%20Construction!5e0!3m2!1sen!2sus!4v1681764956525!5m2!1sen!2sus',
    phone: '(781) 243-0516',
    direction1:
      'From PYM-Plymouth Municipal Airport, 246 S Meadow Rd, Plymouth, MA 02360, Follow S Meadow Rd and Pond St to Center St in Carver, 6 min (3.0 mi), Head northeast (0.1 mi), Turn left toward S Meadow Rd (0.1 mi), Turn left onto S Meadow Rd (1.6 mi), Turn right onto Pond St (1.2 mi), Continue on Center St. Take MA-58 N to Main St in Plympton (9 min) (5.2 mi), Turn right onto Center St (0.5 mi), Turn left to stay on Center St (1.2 mi), Continue onto Plymouth St (0.8 mi), Turn right onto MA-58 N (2.7 mi), Follow Main St to MA-106 W (4 min) (2.3 mi), Turn right onto Main St (2.3 mi), Continue straight (102 ft), Turn left onto MA-106 W, Destination will be on the right (5 s) (49 ft), 87 County Rd, Plympton, MA 02367.',
    direction2:
      'From Massachusetts Registry of Motor Vehicles 490 Forest Ave, Brockton, MA 02301, Take Ash St and Southworth St to Copeland St (6 min) (2.9 mi), Head southeast on Forest Ave toward Memorial Dr (0.2 mi), Turn right onto Gordon St (0.1 mi), Turn right onto Ash St (0.8 mi), Turn left onto W Chestnut St (0.4 mi), Turn right onto Southworth St (0.5 mi), Turn right onto Copeland St (0.8 mi), Slight left to stay on Copeland St (2 min) (0.9 mi), Take Matfield St and East St to Union St (2 min) (1.3 mi), Turn right onto MA-28 S (0.1 mi), Turn left onto Matfield St (0.6 mi), Slight right toward East St (135 ft), Continue onto East St (0.5 mi), Turn left onto Union St (3 min) (1.6 mi), Take Plymouth St to MA-106 E in Plympton (17 min) (9.5 mi), Turn right onto Central St (0.4 mi), Turn right onto Plymouth St (8.3 mi), Continue onto MA-106 E, Destination will be on the left (0.8 mi), 87 County Rd Plympton, MA 02367',
    direction3:
      'From Taunton Municipal Airport-Tan Westcoat Dr, East Taunton, MA 02718, Head north on Westcoat Dr toward Middleboro Ave (1 min) (0.3 mi), Take US-44 E to Main St in Plympton (22 min) (14.7 mi), Turn right onto Middleboro Ave (2.1 mi), Continue onto Taunton St (1.4 mi), Turn left onto MA-18 N (0.8 mi), At the traffic circle, take the 2nd exit onto US-44 E (7.8 mi), Exit onto MA-58 N toward Plympton (2.6 mi), Follow Main St to MA-106 W (4 min) (2.3 mi), Turn right onto Main St (2.3 mi), Continue straight (102 ft), Turn left onto MA-106 W Destination will be on the right (5 s) (49 ft), 87 County Rd Plympton, MA 02367',
    direction4:
      'From Wareham District Court 2200 Cranberry Hwy, West Wareham, MA 02576, Head west toward MA-58 S (397 ft), Turn right onto MA-58 N (2.8 mi), Turn left to stay on MA-58 N (9.7 mi), Turn right onto Main St (2.3 mi), Continue straight (102 ft), Turn left onto MA-106 W, Destination will be on the right (49 ft), 87 County Rd Plympton, MA 02367',
  };

  const seo = {
    title: 'Call Us Today For A Free Landscaping Quote - Plympton, MA',
    description:
      'When it comes to landscaping, lawn care, hardscape, masonry & construction, we are your one-stop shop around Plympton, MA. Give us a call for a free quote!',
    slug: 'https://bravenlandscapeconstruction.com/contact/',
  };

  return (
    <Layout
      street={location.street}
      city={location.city}
      stateAbbr={location.stateAbbr}
      stateFull={location.stateFull}
      zip={location.zip}
      mapUrl={location.mapUrl}
      mapEmbed={location.mapEmbed}
      phone={location.phone}
      direction1={location.direction1}
      direction2={location.direction2}
      direction3={location.direction3}
      direction4={location.direction4}
    >
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
      <HeroContact
        imgHeroBg={imgHeroBg}
        altText="Riding Lawn mowing and lawn care from one of our landscapers"
        headerText={`Contact ${company.name}`}
        subheaderTextOne="Let's schedule a free estimate and plan your next project"
        subheaderTextTwo="Call us now or fill out our form below"
        btnLabel="Call Us Now"
        btnLink={company.phoneHref}
      />
      <div className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative bg-white shadow-xl"
          >
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-green-400">
                  Contact Information
                </h3>
                <p className="mt-6 text-base text-green-50 max-w-3xl">
                  {company.name} is a team of landscaping and construction
                  professionals that are dedicated to providing high-quality
                  services to our clients in {company.cityState}. We always
                  strive for customer satisfaction.
                </p>
                <p className="mt-6 text-base font-bold italic text-green-50 max-w-3xl">
                  Give us a call to schedule an appointment or fill out our
                  contact form for a consultation and we’ll be happy to help
                  you!
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-yellow-100">
                    <div className="flex my-auto">
                      <a
                        href={company.phoneHref}
                        target="_blank"
                        className="flex"
                        rel="noreferrer noopener"
                      >
                        <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                        <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                          {company.phone}
                        </span>
                      </a>
                    </div>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base">
                    <div className="flex my-auto">
                      <a
                        href={company.emailHref}
                        target="_blank"
                        className="flex"
                        rel="noreferrer noopener"
                      >
                        <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                        <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                          {company.email}
                        </span>
                      </a>
                    </div>
                  </dd>
                  <dt>
                    <span className="sr-only">Address</span>
                  </dt>
                  <dd className="flex text-base text-yellow-100">
                    <div className="flex my-auto">
                      <a
                        href={socials.gmbCid}
                        target="_blank"
                        className="flex"
                        rel="noreferrer noopener"
                      >
                        <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                        <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                          {company.address}
                        </span>
                      </a>
                    </div>
                  </dd>
                </dl>
                <ul className="mt-12 ml-1 flex space-x-6">
                  <li>
                    <a
                      href={socials.facebook}
                      rel="noreferrer noopener"
                      className="text-green-500 hover:text-primary"
                    >
                      <span className="sr-only">Facebook</span>
                      <i className="fab fa-2x fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={socials.instagram}
                      rel="noreferrer noopener"
                      className="text-green-500 hover:text-primary"
                    >
                      <span className="sr-only">Instagram</span>
                      <i className="fab fa-2x fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={socials.twitter}
                      rel="noreferrer noopener"
                      className="text-green-500 hover:text-primary"
                    >
                      <span className="sr-only">Twitter</span>
                      <i className="fab fa-2x fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={socials.youTube}
                      rel="noreferrer noopener"
                      className="text-green-500 hover:text-primary"
                    >
                      <span className="sr-only">YouTube</span>
                      <i className="fab fa-2x fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={socials.linkedIn}
                      rel="noreferrer noopener"
                      className="text-green-500 hover:text-primary"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <i className="fab fa-2x fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <iframe
                  title={`Google Map of ${company.name}`}
                  src={socials.gmbEmbed}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
