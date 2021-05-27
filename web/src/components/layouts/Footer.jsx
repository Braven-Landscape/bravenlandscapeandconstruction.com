import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import MapFooter from '../views/footer/MapFooter';
import LinksFooter from '../views/footer/LinksFooter';
import TermsFooter from '../views/footer/TermsFooter';

const settings = {
  footerBgColor: 'bg-gray-800',
};

const links = {
  col1: [
    {
      label: 'Company',
      link: '/',
    },
    {
      label: 'About Us',
      link: '/',
    },
    {
      label: 'Meet The Team',
      link: '/',
    },
    {
      label: 'Our Mission',
      link: '/',
    },
    {
      label: 'Reviews',
      link: '/',
    },
  ],
  col2: [
    {
      label: 'Top Services',
      link: '/',
    },
    {
      label: 'Landscaping',
      link: '/',
    },
    {
      label: 'Design',
      link: '/',
    },
    {
      label: 'Construction',
      link: '/',
    },
    {
      label: 'Gardening',
      link: '/',
    },
  ],
  col3: [
    {
      label: 'Service Areas',
      link: '/',
    },
    {
      label: 'Plympton, MA',
      link: '/',
    },
    {
      label: 'Plymouth, MA',
      link: '/',
    },
    {
      label: 'Bridgewater, MA',
      link: '/',
    },
    {
      label: 'Brockton, MA',
      link: '/',
    },
  ],
  col4: [
    {
      label: 'Information',
      link: '/',
    },
    {
      label: 'Phone',
      link: '/',
    },
    {
      label: 'Email',
      link: '/',
    },
    {
      label: 'Hours',
      link: '/',
    },
    {
      label: 'Directions',
      link: '/',
    },
  ],
};

const socialLinks = {
  facebook: '#',
  instagram: '#',
  twitter: '#',
  youtube: '#',
  gmb: '#',
};

const text = {
  logoSubText: 'Landscape & Construction',
};

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQ {
      logo: file(
        relativePath: {
          eq: "assets/graphics/braven-landscape-construction-plympton-ma-logo.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgLogo = data.logo.childImageSharp.gatsbyImageData;

  return (
    <footer className={settings.footerBgColor} aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <MapFooter />
      <LinksFooter />
      <TermsFooter />
    </footer>
  );
};

export default Footer;
