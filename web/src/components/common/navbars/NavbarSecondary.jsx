import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const settings = {
  bg: 'bg-primary',
  textColor: 'text-white',
  textColorHover: 'hover:text-gray-200',
  textSize: 'text-sm',
  textWeight: 'font-thin',
};

const NavbarSecondary = () => {
  const data = useStaticQuery(graphql`
    query NavbarSecondaryQ {
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

  return (
    <div className={`hidden lg:block ${settings.bg} z-50 w-full`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10">
          <div className="flex my-auto">
            <a
              href={company.emailHref}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              <i className="fas fa-envelope mr-3 text-accent hover:text-accent-dark" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                {company.email}
              </span>
            </a>
          </div>
          <div className="flex my-auto">
            <a
              href={socials.gmbCid}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              <i className="fas fa-map-marker-alt mr-3 text-accent hover:text-accent-dark" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                {company.address}
              </span>
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href={company.phoneHref}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              <i className="fas fa-phone mr-3 text-accent hover:text-accent-darker" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                {company.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecondary;
