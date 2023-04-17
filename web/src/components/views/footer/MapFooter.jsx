import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const settings = {
  footerBgColor: 'bg-gray-800',
};

const MapFooter = ({
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
    query MapFooterQ {
      sanitySettingsCompany {
        address
        cityState
        name
      }
      sanitySettingsSocials {
        gmbEmbed
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;

  return (
    <div className="bg-green-900 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8 lg:col-span-1">
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="space-y-8 lg:col-span-1 text-white mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold text-accent">
            {company.name} Is Located In {city}, {stateAbbr}
          </h2>
          <p>
            {company.name} is proud to service Massachusetts, particularly in
            Plymouth County, Bristol County, Barnstable County, South Shore,
            South Coast, and Cape Cod areas.
          </p>
          <p>
            Are you looking for directions to our central office at {street},{' '}
            {city}, {stateAbbr} {zip}? Use the Google Map or the directions
            provided from surrounding towns.
          </p>
          <div className="w-full p-2 mx-auto rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                    <h3 className="">Directions From Plymouth, MA</h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                    {direction1}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                    <h3 className="">Directions From Brockton, MA</h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                    {direction2}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                    <h3 className="">Directions From Taunton, MA</h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                    {direction3}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                    <h3 className="">Directions From Wareham, MA</h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                    {direction4}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapFooter;
