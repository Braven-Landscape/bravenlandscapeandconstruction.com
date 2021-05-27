import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const settings = {
  footerBgColor: 'bg-gray-800',
};

const MapFooter = () => {
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
            src={socials.gmbEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="space-y-8 lg:col-span-1 text-white">
          <h2 className="text-3xl font-bold text-accent">
            {company.name} Is Located In {company.cityState}
          </h2>
          <p>
            {company.name} is proud to service Massachusetts, particularly in
            Plymouth County, Bristol County, Barnstable County, South Shore,
            South Coast, and Cape Cod areas.
          </p>
          <p>
            Looking for directions to our central office at {company.address}?
            Use the Google Map or the directions provided from surrounding
            towns.
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
                    From PYM-Plymouth Municipal Airport, 246 S Meadow Rd,
                    Plymouth, MA 02360, Follow S Meadow Rd and Pond St to Center
                    St in Carver, 6 min (3.0 mi), Head northeast (0.1 mi), Turn
                    left toward S Meadow Rd (0.1 mi), Turn left onto S Meadow Rd
                    (1.6 mi), Turn right onto Pond St (1.2 mi), Continue on
                    Center St. Take MA-58 N to Main St in Plympton (9 min) (5.2
                    mi), Turn right onto Center St (0.5 mi), Turn left to stay
                    on Center St (1.2 mi), Continue onto Plymouth St (0.8 mi),
                    Turn right onto MA-58 N (2.7 mi), Follow Main St to MA-106 W
                    (4 min) (2.3 mi), Turn right onto Main St (2.3 mi), Continue
                    straight (102 ft), Turn left onto MA-106 W, Destination will
                    be on the right (5 s) (49 ft), 87 County Rd, Plympton, MA
                    02367.
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
                    From Massachusetts Registry of Motor Vehicles 490 Forest
                    Ave, Brockton, MA 02301, Take Ash St and Southworth St to
                    Copeland St (6 min) (2.9 mi), Head southeast on Forest Ave
                    toward Memorial Dr (0.2 mi), Turn right onto Gordon St (0.1
                    mi), Turn right onto Ash St (0.8 mi), Turn left onto W
                    Chestnut St (0.4 mi), Turn right onto Southworth St (0.5
                    mi), Turn right onto Copeland St (0.8 mi), Slight left to
                    stay on Copeland St (2 min) (0.9 mi), Take Matfield St and
                    East St to Union St (2 min) (1.3 mi), Turn right onto MA-28
                    S (0.1 mi), Turn left onto Matfield St (0.6 mi), Slight
                    right toward East St (135 ft), Continue onto East St (0.5
                    mi), Turn left onto Union St (3 min) (1.6 mi), Take Plymouth
                    St to MA-106 E in Plympton (17 min) (9.5 mi), Turn right
                    onto Central St (0.4 mi), Turn right onto Plymouth St (8.3
                    mi), Continue onto MA-106 E, Destination will be on the left
                    (0.8 mi), 87 County Rd Plympton, MA 02367
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
                    From Taunton Municipal Airport-Tan Westcoat Dr, East
                    Taunton, MA 02718, Head north on Westcoat Dr toward
                    Middleboro Ave (1 min) (0.3 mi), Take US-44 E to Main St in
                    Plympton (22 min) (14.7 mi), Turn right onto Middleboro Ave
                    (2.1 mi), Continue onto Taunton St (1.4 mi), Turn left onto
                    MA-18 N (0.8 mi), At the traffic circle, take the 2nd exit
                    onto US-44 E (7.8 mi), Exit onto MA-58 N toward Plympton
                    (2.6 mi), Follow Main St to MA-106 W (4 min) (2.3 mi), Turn
                    right onto Main St (2.3 mi), Continue straight (102 ft),
                    Turn left onto MA-106 W Destination will be on the right (5
                    s) (49 ft), 87 County Rd Plympton, MA 02367
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
                    From Wareham District Court 2200 Cranberry Hwy, West
                    Wareham, MA 02576, Head west toward MA-58 S (397 ft), Turn
                    right onto MA-58 N (2.8 mi), Turn left to stay on MA-58 N
                    (9.7 mi), Turn right onto Main St (2.3 mi), Continue
                    straight (102 ft), Turn left onto MA-106 W, Destination will
                    be on the right (49 ft), 87 County Rd Plympton, MA 02367
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
