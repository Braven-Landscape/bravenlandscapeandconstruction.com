import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroHome from '../components/views/home/HeroHome';
import CompanyHome from '../components/views/home/CompanyHome';
import FeaturesHome from '../components/views/home/FeaturesHome';
import CtaHome from '../components/views/home/CtaHome';
import ServiceOneHome from '../components/views/home/ServiceOneHome';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQ {
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
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;

  const seo = {
    title: 'Landscaping, Lawn Care, Construction Services - Plympton, MA',
    description:
      'We offer landscaping, lawn care, construction services in Plymouth County. Call today for a free estimate to achieve your vision for your home or business!',
    slug: '/',
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
      <HeroHome />
      <CompanyHome />
      <FeaturesHome />
      <CtaHome />
      <ServiceOneHome />
    </Layout>
  );
};

export default IndexPage;
