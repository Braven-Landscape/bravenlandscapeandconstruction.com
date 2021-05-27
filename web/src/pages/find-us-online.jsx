import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const FindUsOnlinePage = () => {
  const data = useStaticQuery(graphql`
    query FindUsOnlinePageQ {
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
          eq: "assets/images/find-us-online/find-us-online-landscaping-services-braven-landscape-construction-plympton-ma.jpg"
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
    title: 'Landscaping, Lawn Care, Construction Services',
    description:
      'We offer landscaping, lawn care, construction services in Plymouth County. Call today for a free estimate to achieve your vision for your home or business!',
    slug: '/find-us-online/',
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
        headerText="Find Us Online"
        subheaderText="Find out more about us by visiting our social media accounts"
        buttonLabel="Schedule Appointment"
      />
      <Container type="sm">
        <div className="py-10 lg:max-w-3xl mx-auto">
          <h2 className="text-center py-5">
            <span className="text-base text-gray-500 uppercase break-normal">
              {company.name}
              <br />
            </span>
            <span className="break-normal text-3xl">Find Us Online</span>
          </h2>
          <p className="py-5">
            You can find {company.name} online by visiting the links below.
            Check out our social media accounts and directory listings for more
            information on who we are, what we do, and how we can work together.
            We're excited to meet new people and share our work!
          </p>
          <h3 className="py-5 font-bold">Links:</h3>
          <ul className="py-5 list-disc list-inside">
            <li>
              <a href="/" target="_blank">
                Link
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default FindUsOnlinePage;
