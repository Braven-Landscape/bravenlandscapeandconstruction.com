import React from 'react';
import NavbarMain from '../common/navbars/NavbarMain';
import NavbarSecondary from '../common/navbars/NavbarSecondary';

const Navbar = ({ street, city, stateAbbr, stateFull, zip, mapUrl, phone }) => (
  <nav className="fixed z-50 w-full">
    <NavbarSecondary
      street={street}
      city={city}
      stateAbbr={stateAbbr}
      stateFull={stateFull}
      zip={zip}
      mapUrl={mapUrl}
      phone={phone}
    />
    <NavbarMain />
  </nav>
);

export default Navbar;
