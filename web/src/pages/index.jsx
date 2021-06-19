import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroHome from '../components/views/home/HeroHome';
import BenefitsHome from '../components/views/home/BenefitsHome';
import CompanyHome from '../components/views/home/CompanyHome';
import FeaturesHome from '../components/views/home/FeaturesHome';
import CtaHome from '../components/views/home/CtaHome';
import ServiceOneHome from '../components/views/home/ServiceOneHome';
import ServiceTwoHome from '../components/views/home/ServiceTwoHome';
import CtaServiceOneHome from '../components/views/home/CtaServiceOneHome';
import CtaServiceTwoHome from '../components/views/home/CtaServiceTwoHome';

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
      sanitySettingsColors {
        primaryColor {
          hex
        }
        primaryColorLight {
          hex
        }
        primaryColorDark {
          hex
        }
        secondaryColor {
          hex
        }
        secondaryColorLight {
          hex
        }
        secondaryColorDark {
          hex
        }
        accentColor {
          hex
        }
        accentColorLight {
          hex
        }
        accentColorDark {
          hex
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;
  const colors = data.sanitySettingsColors;

  const seo = {
    title: 'Landscaping, Hardscape, Construction Services - Plympton, MA',
    description:
      'Our team is committed to providing the highest quality landscaping, hardscape, and construction services around Plympton, MA. Call today for a free estimate!',
    slug: 'https://bravenlandscapeconstruction.com',
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
      <BenefitsHome />
      <CompanyHome />
      <FeaturesHome />
      <CtaHome />
      <ServiceOneHome />
      <CtaServiceOneHome />
      <ServiceTwoHome />
      {/* <CtaServiceTwoHome /> */}
    </Layout>
  );
};

export default IndexPage;
