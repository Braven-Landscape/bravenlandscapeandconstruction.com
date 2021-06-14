/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import NavLogo from './NavLogo';
import Button from '../Button';

const settings = {
  bg: 'bg-gray-800',
  textColor: 'text-white',
  textColorHover: 'hover:text-accent',
  textColorActive: 'text-primary-light',
  textColorActiveHover: 'hover:text-primary',
  textSize: 'text-lg',
  textSizeMobile: 'text-xl',
  textWeight: 'font-medium',
  btnLink: '/contact/',
};

const navLinksDesktop = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about/' },
  { name: 'Landscaping Services', to: '/services/' },
  { name: 'Construction Services', to: '/services/' },
];

const navLinksMobile = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about/' },
  { name: 'Landscaping Services', to: '/services/' },
  { name: 'Construction Services', to: '/services/' },
  { name: 'Contact Us', to: '/contact/' },
];

const dryClasses = {
  navItem: `border-transparent ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-1 ${settings.textSize} ${settings.textWeight}`,
  navItemMobile: `border-transparent ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-7 pb-5 ${settings.textSizeMobile} ${settings.textWeight}`,
  activeNavItem: `border-transparent ${settings.textColorActive} ${settings.textColorActiveHover} inline-flex items-center px-1 pt-1 ${settings.textSize} ${settings.textWeight}`,
};

const NavbarMain = () => {
  const data = useStaticQuery(graphql`
    query NavbarMainQ {
      sanitySettingsCompany {
        name
      }
      imgLogo: file(
        relativePath: {
          eq: "assets/graphics/braven-landscape-construction-plympton-ma-logo.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            height: 75
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const imgLogo = data.imgLogo.childImageSharp.gatsbyImageData;

  return (
    <Disclosure as="nav" className={settings.bg}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLogo>
                    <GatsbyImage
                      image={imgLogo}
                      alt={`${company.name} company logo`}
                      loading="eager"
                    />
                  </NavLogo>
                </div>
                <div className="hidden sm:block sm:ml-6 lg:mx-auto self-center">
                  <div className="flex space-x-6">
                    {navLinksDesktop.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={dryClasses.navItem}
                        activeClassName={dryClasses.activeNavItem}
                        // aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:flex sm:items-center">
                    <Button type="internal" btnLink={settings.btnLink} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col lg:flex-row px-2 pt-2 pb-3 space-y-1">
              {navLinksMobile.map((item) => (
                <div className="text-center">
                  <Link
                    key={item.name}
                    to={item.to}
                    className={dryClasses.navItemMobile}
                    activeClassName={dryClasses.activeNavItem}
                    // aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavbarMain;
