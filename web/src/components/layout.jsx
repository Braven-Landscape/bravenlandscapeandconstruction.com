import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import CallBtn from './common/CallBtn';
import './layout.css';

const Layout = ({
  children,
  street,
  city,
  stateAbbr,
  stateFull,
  zip,
  mapUrl,
  mapEmbed,
  phone,
  direction1,
  direction2,
  direction3,
  direction4,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar
        street={street}
        city={city}
        stateAbbr={stateAbbr}
        stateFull={stateFull}
        zip={zip}
        mapUrl={mapUrl}
        phone={phone}
      />
      <div>
        <main>{children}</main>
      </div>
      <CallBtn phone={phone} />
      <Footer
        street={street}
        city={city}
        stateAbbr={stateAbbr}
        stateFull={stateFull}
        zip={zip}
        mapUrl={mapUrl}
        mapEmbed={mapEmbed}
        phone={phone}
        direction1={direction1}
        direction2={direction2}
        direction3={direction3}
        direction4={direction4}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
