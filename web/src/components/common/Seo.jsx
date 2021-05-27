import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ lang, title, description, canonical, image, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
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
        zip
      }
    }
  `);

  const company = data.sanitySettingsCompany;

  const metaDescription = description || data.site.siteMetadata.description;
  const metadata = data.site.siteMetadata;

  const structuredDataLocalBusiness = `
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@context": "http://www.schema.org",
        "email": "sales@metacomsoftware.com",
        "legalName": "Metacom Development",
      }
    ]
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${company.name}`}
    >
      <link rel="canonical" href={`${company.website}${canonical}`} />

      {/* REMOVE BEFORE GOING LIVE */}
      <meta name="robots" content="noindex" />

      <meta name="description" content={metaDescription} />

      {/* Open Graph tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={company.website} />
      <meta property="og:site_name" content={metadata.title} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={metadata.author} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metaDescription} />

      {/* <script type="application/ld+json">{structuredDataLocalBusiness}</script> */}
      {children}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  canonical: ``,
  image: ``,
  children: ``,
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
