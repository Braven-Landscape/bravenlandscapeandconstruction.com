import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const ThankYouPage = () => {
  const data = useStaticQuery(graphql`
    query ThankYouPageQ {
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
    title: 'Thank You! We Will Contact You Shortly!',
    description: `Thank you for reach out to ${company.name}! We will be contacting you shortly.`,
    slug: 'https://bravenlandscapeconstruction.com/thank-you/',
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
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <HeaderPage
        imgHeroBg={imgHeroBg}
        headerText="Thank You!"
        subheaderText="We will be contacting you shortly."
        btnLabel="Return Home"
        btnLink="/"
      />
      <Container type="sm">
        <div className="py-24 lg:max-w-4xl mx-auto">
          <div className="bg-yellow-50 border border-primary rounded-xl shadow-xl p-5 lg:p-10">
            <div className="text-center py-5 space-y-3">
              <h2 className="text-normal text-gray-500 uppercase break-normal">
                {company.name}
              </h2>
              <h3 className="text-primary font-bold break-normal text-4xl capitalize">
                We Look Forward to Working With You
              </h3>
            </div>
            <p className="py-5 text-xl text-center">
              We appreciate your interest in our services. We will get back to
              you as soon as we can to discuss your next project. In the
              meantime, please check out the rest of our website for more
              information on our company and our services.
            </p>
            <p className="pt-5 text-xl text-right font-semibold">Thanks,</p>
            <p className="pb-5 text-xl text-right italic">Henrique Almeida</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ThankYouPage;
