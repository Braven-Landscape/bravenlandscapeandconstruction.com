import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const PageMissingPage = () => {
  const data = useStaticQuery(graphql`
    query PageMissingPageQ {
      site {
        siteMetadata {
          company
          emailDisplay
          emailHref
          company
          siteUrl
          address
          street
          cityState
          zip
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
          eq: "assets/images/page-missing/wheel-barrow-landscaping-contractor-braven-landscape-construction-plympton-ma.jpg"
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

  const seo = {
    title: 'Something Went Wrong! This Page is Missing - 404 Error',
    description: `This page appears to be missing! Try visiting our home or services page for more information about ${company.name}`,
    slug: '/404/',
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
      <HeaderPage
        imgHeroBg={imgHeroBg}
        headerText="Something Went Wrong!"
        subheaderText="This page is missing! We call this a 404 error"
        buttonLabel="Schedule Appointment"
      />
      <Container type="sm">
        <div className="py-24 lg:max-w-3xl mx-auto">
          <div className="text-center py-5 space-y-3">
            <h2 className="text-normal text-gray-500 uppercase break-normal">
              {company.name}
            </h2>
            <h3 className="text-primary font-bold break-normal text-4xl capitalize">
              Let's see if we can help
            </h3>
          </div>
          <p className="py-5 text-xl text-center">
            The page you are trying to visit does not exist. Check for a typo in
            the URL.
          </p>
          <h3 className="py-5 font-bold">Try these links:</h3>
          <div className="max-w-3xl">
            <ul className="list-disc list-inside">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About Us</Link>
              </li>
              <li>
                <Link to="/services/">Services</Link>
              </li>
              <li>
                <Link to="/contact/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PageMissingPage;
