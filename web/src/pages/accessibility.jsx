import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const AccessibilityPage = () => {
  const data = useStaticQuery(graphql`
    query AccessibilityPageQ {
      site {
        siteMetadata {
          company
          emailDisplay
          emailHref
          address
          phoneDisplay
          phoneHref
          siteUrl
          gmbCID
          street
          cityState
          zip
          owner
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
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/accessibility/web-accessibility-landscaping-services-braven-landscape-construction-plympton-ma.jpg"
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
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

  const location = {
    street: '87 County Rd',
    city: 'Plympton',
    stateAbbr: 'MA',
    stateFull: 'Massachusetts',
    zip: '02367',
    mapUrl:
      'https://www.google.com/maps/place/Braven+Landscape+%26+Construction/@41.9886533,-70.807675,15z/data=!4m6!3m5!1s0x89e4bd9ccbd80d9d:0xcf43a23e26480b26!8m2!3d41.9886533!4d-70.807675!16s%2Fg%2F11q96pynds?coh=164777&entry=tt&shorturl=1',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11862.165932860273!2d-70.807675!3d41.9886533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4bd9ccbd80d9d%3A0xcf43a23e26480b26!2sBraven%20Landscape%20%26%20Construction!5e0!3m2!1sen!2sus!4v1681764956525!5m2!1sen!2sus',
    phone: '(781) 243-0516',
    direction1:
      'From PYM-Plymouth Municipal Airport, 246 S Meadow Rd, Plymouth, MA 02360, Follow S Meadow Rd and Pond St to Center St in Carver, 6 min (3.0 mi), Head northeast (0.1 mi), Turn left toward S Meadow Rd (0.1 mi), Turn left onto S Meadow Rd (1.6 mi), Turn right onto Pond St (1.2 mi), Continue on Center St. Take MA-58 N to Main St in Plympton (9 min) (5.2 mi), Turn right onto Center St (0.5 mi), Turn left to stay on Center St (1.2 mi), Continue onto Plymouth St (0.8 mi), Turn right onto MA-58 N (2.7 mi), Follow Main St to MA-106 W (4 min) (2.3 mi), Turn right onto Main St (2.3 mi), Continue straight (102 ft), Turn left onto MA-106 W, Destination will be on the right (5 s) (49 ft), 87 County Rd, Plympton, MA 02367.',
    direction2:
      'From Massachusetts Registry of Motor Vehicles 490 Forest Ave, Brockton, MA 02301, Take Ash St and Southworth St to Copeland St (6 min) (2.9 mi), Head southeast on Forest Ave toward Memorial Dr (0.2 mi), Turn right onto Gordon St (0.1 mi), Turn right onto Ash St (0.8 mi), Turn left onto W Chestnut St (0.4 mi), Turn right onto Southworth St (0.5 mi), Turn right onto Copeland St (0.8 mi), Slight left to stay on Copeland St (2 min) (0.9 mi), Take Matfield St and East St to Union St (2 min) (1.3 mi), Turn right onto MA-28 S (0.1 mi), Turn left onto Matfield St (0.6 mi), Slight right toward East St (135 ft), Continue onto East St (0.5 mi), Turn left onto Union St (3 min) (1.6 mi), Take Plymouth St to MA-106 E in Plympton (17 min) (9.5 mi), Turn right onto Central St (0.4 mi), Turn right onto Plymouth St (8.3 mi), Continue onto MA-106 E, Destination will be on the left (0.8 mi), 87 County Rd Plympton, MA 02367',
    direction3:
      'From Taunton Municipal Airport-Tan Westcoat Dr, East Taunton, MA 02718, Head north on Westcoat Dr toward Middleboro Ave (1 min) (0.3 mi), Take US-44 E to Main St in Plympton (22 min) (14.7 mi), Turn right onto Middleboro Ave (2.1 mi), Continue onto Taunton St (1.4 mi), Turn left onto MA-18 N (0.8 mi), At the traffic circle, take the 2nd exit onto US-44 E (7.8 mi), Exit onto MA-58 N toward Plympton (2.6 mi), Follow Main St to MA-106 W (4 min) (2.3 mi), Turn right onto Main St (2.3 mi), Continue straight (102 ft), Turn left onto MA-106 W Destination will be on the right (5 s) (49 ft), 87 County Rd Plympton, MA 02367',
    direction4:
      'From Wareham District Court 2200 Cranberry Hwy, West Wareham, MA 02576, Head west toward MA-58 S (397 ft), Turn right onto MA-58 N (2.8 mi), Turn left to stay on MA-58 N (9.7 mi), Turn right onto Main St (2.3 mi), Continue straight (102 ft), Turn left onto MA-106 W, Destination will be on the right (49 ft), 87 County Rd Plympton, MA 02367',
  };

  const seo = {
    title: 'Our Accessibility Policy - Landscaping in Plympton, MA',
    description: `${company.name} strongly believes in providing accessibility to our website for everyone. We try our best to make sure everything is ADA compliant.`,
    slug: 'https://bravenlandscapeconstruction.com/accessibility/',
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
        <script type="application/ld+json">
          {`
            {
              "@context": "http://www.schema.org",
              "@type": "Organization",
              "name": "Braven Landscape & Construction",
              "url": "https://bravenlandscapeconstruction.com/",
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
        </script>
      </SEO>
      <HeaderPage
        imgHeroBg={imgHeroBg}
        altText="Lawn mowing and lawn care from one of our landscaping experts"
        headerText="Our Website Accessibility Policy"
        subheaderText="Website ADA & WCAG compliance"
        buttonLabel="Schedule Appointment"
      />
      <Container type="sm">
        <div className="py-10 lg:max-w-3xl mx-auto">
          <h2 className="text-center py-5">
            <span className="text-base text-gray-500 uppercase break-normal">
              {company.name}
              <br />
            </span>
            <span className="break-normal text-3xl">
              Accessibility Statement
            </span>
          </h2>
          <p className="py-3">
            {company.name} is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone, and applying the relevant accessibility
            standards.
          </p>
          <h3 className="py-5 font-bold capitalize">
            Measures to support accessibility
          </h3>
          <p className="py-3">
            {company.name} takes the following measures to ensure accessibility
            of our website (&quot;
            <a
              className="italic"
              href={company.website}
              target="_blank"
              rel="noreferrer"
            >
              {company.website}
            </a>
            &quot;):
          </p>
          <ul className="py-5 list-disc list-inside">
            <li>Include accessibility as part of our mission statement.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Include people with disabilities in our design personas.</li>
          </ul>

          <h3 className="py-5 font-bold capitalize">Conformance status</h3>
          <p className="py-3">
            The{' '}
            <a
              target="_blank"
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              rel="noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG)
            </a>{' '}
            defines requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels
            of conformance: Level A, Level AA, and Level AAA. Citylights
            WebStore is partially conformant with WCAG 2.1 level AA. Partially
            conformant means that some parts of the content do not fully conform
            to the accessibility standard.
          </p>

          <h4 className="py-5 font-bold capitalize">
            Additional accessibility considerations
          </h4>
          <p className="py-3">
            Although our goal is WCAG 2.1 Level AA conformance, we have also
            applied some Level AAA Success Criteria: Images of text are only
            used for decorative purposes. Re-authentication after a session
            expires does not cause loss of data. Some videos have sign language
            interpretation.
          </p>
          <h3 className="py-5 font-bold">Feedback</h3>
          <p className="py-3">
            We welcome your feedback on the accessibility of our website. Please
            let us know if you encounter accessibility barriers on{' '}
            <a
              className="italic"
              href={company.website}
              target="_blank"
              rel="noreferrer"
            >
              {company.website}
            </a>
            .
          </p>
          <ul className="py-5 list-disc list-inside">
            <li>
              Phone:{' '}
              <a href={company.phoneHref} target="_blank" rel="noreferrer">
                {company.phone}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href={company.emailHref} target="_blank" rel="noreferrer">
                {company.email}
              </a>
            </li>
            <li>
              Address:{' '}
              <a href={socials.gmbCid} target="_blank" rel="noreferrer">
                {company.address}
              </a>
            </li>
          </ul>
          <p className="py-3">
            We try to respond to feedback within 5 business days.
          </p>
          <h3 className="py-5 font-bold capitalize">
            Compatibility with browsers and assistive technology
          </h3>
          <p className="py-3">
            {company.name}'s website is designed to be compatible with the
            following assistive technologies:
          </p>
          <ul className="py-5 list-disc list-inside">
            <li>
              &quot;browser X with assistive technology Y on operating system
              Z&quot;
            </li>
          </ul>
          <p className="py-3">
            {company.name}'s website is not compatible with:
          </p>
          <ul className="py-5 list-disc list-inside">
            <li>
              &quot;browsers older than 3 major versions&quot; or &quot;Mobile
              operating systems older than 5 year&quot;
            </li>
          </ul>
          <h3 className="py-5 font-bold capitalize">
            Technical specifications
          </h3>
          <p className="py-3">
            Accessibility of Citylights WebStore relies on the following
            technologies to work with the particular combination of web browser
            and any assistive technologies or plugins installed on your
            computer:
          </p>
          <ul className="py-5 list-disc list-inside">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h3 className="py-5 font-bold capitalize">
            Limitations and alternatives
          </h3>
          <p className="py-3">
            Despite our best efforts to ensure accessibility of Citylights
            WebStore, there may be some limitations. Below is a description of
            known limitations, and potential solutions. Please contact us if you
            observe an issue not listed below.
          </p>
          <p className="py-3">
            Known limitations for {company.name}'s website:
          </p>
          <ol className="py-5 list-decimal list-inside">
            <li>
              <span className="font-bold">Comments from users</span>: uploaded
              images may not have text alternatives because we cannot ensure the
              quality of contributions. We monitor user comments and typically
              repair issues within 10 business days. Please use the 'report
              issue' button if you encounter an issue.
            </li>
            <li>
              <span className="font-bold">Archived documents</span>: might not
              work with current assistive technologies because they use outdated
              technologies that do not support accessibility. We convert
              documents to new formats upon request within 3 business days.
              Please contact documents@example.org for support.
            </li>
          </ol>
          <h3 className="py-5 font-bold capitalize">Assessment approach</h3>
          <p className="py-3">
            {company.name} assessed the accessibility of our website by the
            following approaches:
          </p>
          <ul className="py-5 list-disc list-inside">
            <li>External evaluation</li>
          </ul>
          <h3 className="py-5 font-bold capitalize">
            Formal approval of this accessibility statement
          </h3>
          <p className="py-3">This Accessibility Statement is approved by:</p>
          <ul className="py-5 list-inside">
            <li>{company.name}</li>
            <li className="italic">Communication Department</li>
            <li className="italic">Director of Communication</li>
          </ul>
          <h3 className="py-5 font-bold capitalize">Formal complaints</h3>
          <p className="py-3">
            We aim to respond to accessibility feedback within 5 business days,
            and to propose a solution within 10 business days. You are entitled
            to escalate a complaint to the national authority, should you be
            dissatisfied with our response to you.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default AccessibilityPage;
