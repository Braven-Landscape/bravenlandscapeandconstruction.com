import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const settings = {
  linkColor: 'text-accent',
  linkColorHover: 'hover:text-primary',
  footerBgColor: 'bg-gray-800',
};

const text = {
  logoSubText: 'Landscape & Construction',
};

const LinkFooter = () => {
  const data = useStaticQuery(graphql`
    query LinkFooterQ {
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

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;
  const imgLogo = data.logo.childImageSharp.gatsbyImageData;

  const links = {
    col1: [
      {
        label: 'Company',
        link: '/',
      },
      {
        label: 'About Us',
        link: '/about/',
      },
      {
        label: 'Meet The Team',
        link: '/about/',
      },
      {
        label: 'Find Us Online',
        link: '/find-us-online/',
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
        link: '/landscaping-services/',
      },
      {
        label: 'Design',
        link: '/landscaping-services/',
      },
      {
        label: 'Construction',
        link: '/construction-services/',
      },
      {
        label: 'Gardening',
        link: '/landscaping-services/',
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
        label: 'Brockton, MA',
        link: '/',
      },
      {
        label: 'Taunton, MA',
        link: '/',
      },
      {
        label: 'Wareham, MA',
        link: '/',
      },
    ],
    col4: [
      {
        label: 'Information',
        link: '/',
      },
      {
        label: `${company.address}`,
        link: `${socials.gmbCid}`,
      },
      {
        label: `${company.phone}`,
        link: `${company.phoneHref}`,
      },
      {
        label: `${company.email}`,
        link: `${company.emailHref}`,
      },
      {
        label: `${company.hours}`,
        link: `${socials.gmbShare}`,
      },
      {
        label: 'Directions',
        link: '/',
      },
    ],
  };

  const socialLinks = {
    facebook: `${socials.facebook}`,
    instagram: `${socials.instagram}`,
    twitter: `${socials.twitter}`,
    youtube: `${socials.youTube}`,
    linkedIn: `${socials.linkedIn}`,
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-12">
        <div className="space-y-8 xl:col-span-1">
          <GatsbyImage
            image={imgLogo}
            className="w-56 mx-auto"
            alt={`${company.name} logo`}
          />
          <p className="text-gray-50 text-base text-center italic">
            {text.logoSubText}
          </p>
          <div className="flex space-x-6 justify-center">
            <a
              href={socialLinks.facebook}
              rel="nofollow noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <i className="fab fa-2x fa-facebook" />
            </a>

            <a
              href={socialLinks.instagram}
              rel="nofollow noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <i className="fab fa-2x fa-instagram" />
            </a>

            <a
              href={socialLinks.twitter}
              rel="nofollow noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <i className="fab fa-2x fa-twitter" />
            </a>

            <a
              href={socialLinks.youtube}
              rel="nofollow noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">YouTube</span>
              <i className="fab fa-2x fa-youtube" />
            </a>

            <a
              href={socialLinks.linkedIn}
              rel="nofollow noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-2x fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {links.col1[0].label}
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to={links.col1[1].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col1[1].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col1[2].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col1[2].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col1[3].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col1[3].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col1[4].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col1[4].label}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {links.col2[0].label}
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to={links.col2[1].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col2[1].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col2[2].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col2[2].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col2[3].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col2[3].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col2[4].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col2[4].label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {links.col3[0].label}
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to={links.col3[1].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col3[1].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col3[2].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col3[2].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col3[3].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col3[3].label}
                  </Link>
                </li>

                <li>
                  <Link
                    to={links.col3[4].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col3[4].label}
                  </Link>
                </li>
                <li>
                  <Link
                    to={links.col3[5].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col3[5].label}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {links.col4[0].label}
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href={links.col4[1].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col4[1].label}
                  </a>
                </li>
                <li>
                  <a
                    href={links.col4[2].link}
                    rel="nofollow noreferrer noopener"
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col4[2].label}
                  </a>
                </li>

                <li>
                  <a
                    href={links.col4[3].link}
                    rel="nofollow noreferrer noopener"
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col4[3].label}
                  </a>
                </li>

                <li>
                  <a
                    href={links.col4[4].link}
                    className={`text-base break-all ${settings.linkColor} ${settings.linkColorHover}`}
                  >
                    {links.col4[4].label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFooter;
