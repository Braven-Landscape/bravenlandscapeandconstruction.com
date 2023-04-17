import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import Hero from '../components/views/home/Hero';
import Benefits from '../components/views/home/Benefits';
import Company from '../components/views/home/Company';
import Features from '../components/views/home/Features';
import Cta from '../components/views/home/Cta';
import ServiceOne from '../components/views/home/ServiceOne';
import CtaServiceOne from '../components/views/home/CtaServiceOne';
import ServiceTwo from '../components/views/home/ServiceTwo';
// import CtaServiceTwoHome from '../components/views/home/CtaServiceTwoHome';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQ {
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
      sanitySettingsColors {
        primaryColor {
          hex
        }
        primaryColorLight {
          hex
        }
        primaryColorDark {
          hex
        }
        secondaryColor {
          hex
        }
        secondaryColorLight {
          hex
        }
        secondaryColorDark {
          hex
        }
        accentColor {
          hex
        }
        accentColorLight {
          hex
        }
        accentColorDark {
          hex
        }
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;
  const colors = data.sanitySettingsColors;

  const location = {
    street: '35 Industrial Dr',
    city: 'East Bridgewater',
    stateAbbr: 'MA',
    stateFull: 'Massachusetts',
    slug: 'east-bridgewater-ma',
    zip: '02333',
    mapUrl:
      'https://www.google.com/maps/place/35+Industrial+Dr,+East+Bridgewater,+MA+02333/@42.0527798,-70.9082822,17z/data=!3m1!4b1!4m6!3m5!1s0x89e49a29cc9d8d2b:0xa32f582cdc449079!8m2!3d42.0527798!4d-70.9082822!16s%2Fg%2F11gnswf4sj?coh=164777&entry=tt&shorturl=1',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.5522952028823!2d-70.9082822!3d42.05277979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49a29cc9d8d2b%3A0xa32f582cdc449079!2s35%20Industrial%20Dr%2C%20East%20Bridgewater%2C%20MA%2002333!5e0!3m2!1sen!2sus!4v1681764777303!5m2!1sen!2sus',
    phone: '(857) 756-3404',
    direction1:
      'From PYM-Plymouth Municipal Airport, 246 S Meadow Rd, Plymouth, MA 02360, Take S Meadow Rd to Center St, 4 min (2.4 mi), Head southwest on S Meadow Rd toward Wade St, 1.2 mi, Turn right onto Pond St, 1.2 mi, Continue on Center St. Take MA-58 N to Center St in Plympton, 10 min (5.9 mi), Turn right onto Center St, 0.5 mi, Turn left to stay on Center St, 1.2 mi, Continue onto Plymouth St, 0.8 mi, Turn right onto MA-58 N, 3.3 mi, Continue on Center St. Take Franklin St to MA-106 W/Plymouth St in Halifax, 6 min (3.3 mi), Turn left onto Center St, 1.3 mi, Continue onto Franklin St, 1.3 mi, Turn right onto South St, 0.4 mi, Continue straight onto Carver St, 0.4 mi, Take Elm St and MA-27 N to Industrial Dr in East Bridgewater, 9 min (5.5 mi), Turn left onto MA-106 W/Plymouth St, 0.5 mi, Turn right onto Old Plymouth St, 0.3 mi, Slight right onto Elm St, 3.2 mi, Turn left onto MA-27 N, 1.5 mi, Turn left onto Industrial Dr, 1 min (0.1 mi), 35 Industrial Dr, East Bridgewater, MA 02333',
    direction2:
      "Massachusetts Registry of Motor Vehicles, 490 Forest Ave, Brockton, MA 02301, Take Forest Ave, Crescent St and MA-14 E to Industrial Dr in East Bridgewater, 21 min (8.5 mi), Head southeast on Forest Ave toward Memorial Dr, 1.2 mi, Turn right onto Main St, 0.2 mi, Turn left onto Grove St, 0.8 mi, Continue onto Lyman St, 0.1 mi, Turn right onto Crescent St, Pass by AutoZone Auto Parts (on the right in 0.8 mi), 1.4 mi, Turn right onto Alger St, 0.3 mi, Continue onto MA-14 E/W Crook St, Continue to follow MA-14 E, Pass by Wendy's (on the left in 1.7 mi), 2.6 mi, Turn right onto MA-14 E/Washington St, 0.6 mi, Turn left onto MA-14 E, 1.3 mi, Turn right onto MA-27 S, 384 ft, Turn right onto Industrial Dr, 41 sec (0.1 mi), 35 Industrial Dr, East Bridgewater, MA 02333",
    direction3:
      "Taunton Municipal Airport-Tan, Westcoat Dr, East Taunton, MA 02718, Head north on Westcoat Dr toward Middleboro Ave, 1 min (0.3 mi), Continue on Middleboro Ave. Take MA-18 N and Central St to Industrial Dr in East Bridgewater, 31 min (16.9 mi), Turn right onto Middleboro Ave, 2.1 mi, Continue onto Taunton St, 1.4 mi, Turn left onto MA-18 N, 0.8 mi, At the traffic circle, take the 3rd exit onto MA-18 N/MA-28 N, 6.2 mi, Use any lane to turn slightly left onto MA-18 N/Broad St, Continue to follow MA-18 N, Pass by D'Angelo Grilled Sandwiches (on the right), 2.0 mi, Turn right onto MA-106 E/Whitman St, 0.6 mi, Turn left onto Plymouth St, 0.5 mi, Slight right onto Morse Ave, 0.1 mi, Turn right onto Central St, 3.1 mi, Turn left onto MA-27 N, 0.1 mi, Turn left onto Industrial Dr, 1 min (0.1 mi), 35 Industrial Dr, East Bridgewater, MA 02333",
    direction4:
      'Wareham District Court, 2200 Cranberry Hwy, West Wareham, MA 02576, Head west toward MA-58 S, 36 sec (397 ft), Follow MA-58 N to Center St in Plympton, 20 min (13.2 mi), Turn right onto MA-58 N, 2.8 mi, Turn left onto MA-58 N/S Main St, Continue to follow MA-58 N, 10.4 mi, Continue on Center St. Take Franklin St to MA-106 W/Plymouth St in Halifax, 6 min (3.3 mi), Turn left onto Center St, 1.3 mi, Continue onto Franklin St, 1.3 mi, Turn right onto South St, 0.4 mi, Continue straight onto Carver St, 0.4 mi, Take Elm St and MA-27 N to Industrial Dr in East Bridgewater, 9 min (5.5 mi), Turn left onto MA-106 W/Plymouth St, 0.5 mi, Turn right onto Old Plymouth St, 0.3 mi, Slight right onto Elm St, 3.2 mi, Turn left onto MA-27 N, 1.5 mi, Turn left onto Industrial Dr, 1 min (0.1 mi), 35 Industrial Dr, East Bridgewater, MA 02333',
  };

  const seo = {
    title: `${location.city}, ${location.stateAbbr} Landscaping, Hardscaping, Construction Services`,
    description: `Need affordable landscaping in ${location.city}, ${location.stateAbbr}? We provide high quality landscaping, hardscaping, and construction services. Call today for a free estimate!`,
    slug: `https://bravenlandscapeconstruction.com/${location.slug}/`,
  };

  return (
    <Layout
      street={location.street}
      city={location.city}
      stateAbbr={location.stateAbbr}
      stateFull={location.stateFull}
      zip={location.zip}
      mapUrl={location.mapUrl}
      mapEmbed={location.mapEmbed}
      phone={location.phone}
      direction1={location.direction1}
      direction2={location.direction2}
      direction3={location.direction3}
      direction4={location.direction4}
    >
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        {/* <script type="application/ld+json">
          {`
            {
              "@context": "http://www.schema.org",
              "@type": "Organization",
              "name": "Braven Landscape & Construction",
              "url": "https://bravenlandscapeconstruction.com/bridgewater-ma/",
              "logo": "https://bravenlandscapeconstruction.com/static/4b6c9ff6361c3712b9eade222697a469/dd260/braven-landscape-construction-plympton-ma-logo.webp",
              "image": "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQDBQcG/8QAFwEAAwEAAAAAAAAAAAAAAAAAAwQFAv/aAAwDAQACEAMQAAABUv8AFtPm7XIBsR1+duFJQlqTmf/EABwQAAMBAAIDAAAAAAAAAAAAAAMEBQIBBgASE//aAAgBAQABBQLjtLLZ6NTCpEt/ULGtg8RTNRgLVmo/HXkscysb01u4Jk9BRkgpoH2CSF3j+n//xAAcEQEAAQQDAAAAAAAAAAAAAAABAAIDERIhIzH/2gAIAQMBAT8BtrjDOwhaqq8mg8rP/8QAGxEAAQUBAQAAAAAAAAAAAAAAAAECAxMhEUH/2gAIAQIBAT8Bo9EdBwvZGmlitxqYf//EACUQAAIBAwIFBQAAAAAAAAAAAAECAwARIRITBAUiMUEUIzNCcf/aAAgBAQAGPwKFQIcuOwOaWcwldY0ai11U+MVuQ8njdXOq+u9L6ciQr02Xsb1tOfcRBcMc3p+Efhorxt9xY1LPIBdj0qfNMzut1GFYYtTNsh8WxUelyO9TSNK24pw1fIT+1//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQXFRsWGBof/aAAgBAQABPyED6l8pr3GNiuqGUo51cZMozmX7xEbTFy9EmR4mo8W91zBI6nA0VdOe42yCpqLl/YJVToV4UQnEAEarvcwfNTojFATQ7JYq5bvL3P/aAAwDAQACAAMAAAAQyDWz/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAITFBkaH/2gAIAQMBAT8QDM1nO35CTJfJtAk+8gDaZ2hP/8QAGxEBAQACAwEAAAAAAAAAAAAAAREAMSFBkaH/2gAIAQIBAT8QiHJDYrr3nFBX64igaQ673ixPGqtmf//EABwQAQEAAwADAQAAAAAAAAAAAAERACExUWFxQf/aAAgBAQABPxAfgTEFVTZ5WMRe5BCnbDYHDsE1jtOsSEK76EZrtm8PoVKoQL1H9E297j0j4QFRD6AvuNIgAwT+hJFuS8wDl5SBOFhEIlUwwBN/sAwjvvzDHFz0Ei7LVvhM3ZGaMgBvxgNUogCSaC9e5SR6i+B0MNcz/9k=",
              "description": "Braven Landscape & Construction is a landscaping company that offers landscaping, hardscaping, and construction services for residential homes and commercial businesses throughout eastern Massachusetts.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "87 County Rd",
                "addressLocality": "Plympton",
                "addressRegion": "MA",
                "postalCode": "02367",
                "addressCountry": "United States"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.9887355538896",
                "longitude": "-70.80773176294025"
              },
              "hasMap": "https://www.google.com/maps?cid=0x89e4bd9ccbd80d9d:0xcf43a23e26480b26",
              "openingHours": "Mo, Tu, We, Th, Fr, Sa 07:00-17:00 Su 10:00-17:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1(781) 243-0516",
                "contactType": "Sales"
              }
            }
          `}
        </script> */}
      </SEO>
      <Hero
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <Benefits
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <Company
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <Features
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <Cta
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <ServiceOne
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <CtaServiceOne
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      <ServiceTwo
        street={location.street}
        city={location.city}
        stateAbbr={location.stateAbbr}
        stateFull={location.stateFull}
        zip={location.zip}
        mapUrl={location.mapUrl}
        phone={location.phone}
      />
      {/* <CtaServiceTwoHome /> */}
    </Layout>
  );
};

export default IndexPage;
