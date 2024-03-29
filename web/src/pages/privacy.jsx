import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const PrivacyPage = () => {
  const data = useStaticQuery(graphql`
    query PrivacyPageQ {
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
          eq: "assets/images/privacy/privacy-policy-landscaping-services-braven-landscape-construction-plympton-ma.jpg"
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
    title: 'Our Privacy Policy - Landscaping in Plympton, MA',
    description: `${company.name} strongly believes in your rights to privacy. We protect your data and prefer to be transparent about everything we collect.`,
    slug: 'https://bravenlandscapeconstruction.com/privacy/',
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
        altText="Lawn mowing and lawn care from one of our professional landscapers"
        headerText="Our Privacy Policy"
        subheaderText="Check our policy to understand your rights to privacy"
        buttonLabel="Schedule Appointment"
      />
      <Container type="sm">
        <div className="py-10 lg:max-w-3xl mx-auto">
          <h2 className="text-center py-5">
            <span className="text-base text-gray-500 uppercase break-normal">
              {company.name}
              <br />
            </span>
            <span className="break-normal text-3xl">Privacy Policy</span>
          </h2>
          <p className="py-3">
            {company.name} (the &quot;
            <span className="font-bold italic">Company</span>
            &quot;) respects the privacy of its online visitors and customers of
            its products and services (including, but not limited to{' '}
            {company.name}) and complies with applicable laws for the protection
            of your privacy, including, without limitation, the European Union
            General Data Protection Regulation (&quot;
            <span className="font-bold italic">GDPR</span>&quot;) and the Swiss
            and EU Privacy Shield Frameworks.
          </p>
          <h3 className="py-5 font-bold">1. Definitions</h3>
          <p className="py-3">
            Wherever we talk about Personal Data below (&quot;
            <span className="font-bold italic">Personal Data</span>&quot;), we
            mean any information that can either itself identify you as an
            individual (&quot;
            <span className="font-bold italic">
              Personally Identifying Information
            </span>
            &quot;) or that can be connected to you indirectly by linking it to
            Personally Identifying Information, for example:
          </p>
          <p className="py-3">
            (i) your account registration information on our website and in our
            App;
          </p>
          <p className="py-3">
            (ii) when you request any support from us or report any problem to
            us;
          </p>
          <p className="py-3">
            (iii) information provided from using certain services or features;
          </p>
          <p className="py-3">
            (iv) information from completion of survey or questionnaire;
          </p>
          <p className="py-3">
            (v) technical information, including the Internet protocol (IP)
            address used
          </p>
          <p className="py-3">
            (vi) and your log-in information, browser, time zone setting,
            browser plug-in types and versions, operating system and platform;
          </p>
          <p className="py-3">
            (vii) details of any transactions, purchases and payments you made;
          </p>
          <p className="py-3">
            (viii) your general interaction with the website, including the full
            Uniform Resource Locators (URLs), clickstream to, through and from
            our site, products you viewed or searched for, page response times,
            download errors, length of visits to certain pages, page interaction
            information;
          </p>
          <p className="py-3">
            (ix) information received from third parties, such as business
            partners, sub-contractors, payment and delivery services, referral
            by other users.
          </p>
          <p className="py-3">
            The Company also processes anonymous data, aggregated or not, to
            analyze and produce statistics related to the habits, usage
            patterns, and demographics of customers as a group or as
            individuals. Such anonymous data does not allow the identification
            of the customers to which it relates. the Company may share
            anonymous data, aggregated or not, with third parties. Please be
            aware that the Company may choose to permit third parties to offer
            subscription and/or registration-based services through the
            Company's site. The Company shall not be responsible for any actions
            or policies of such third parties and you should check the
            applicable privacy policy of such party when providing personally
            identifiable information.
          </p>
          <p className="py-3">
            By using the Company's website, you signify your assent to the
            Company's privacy policy. If you do not agree to this policy, please
            do not use the Company's website(s).
          </p>
          <h3 className="py-5 font-bold">
            2. Why the Company Collects and Processes Data
          </h3>
          <p className="py-3">
            The Company collects and processes Personal Data for the following
            reasons:
          </p>
          <p className="py-3">
            (a) performing our agreement with you to provide content and
            services, including providing, improving and developing our
            services;
          </p>
          <p className="py-3">
            (b) researching, designing and launching new features or products;
          </p>
          <p className="py-3">
            (c) providing you with alerts, updates, materials or information
            about our services or other types of information that you requested
            or signed up to;
          </p>
          <p className="py-3">(d) collecting overdue amounts;</p>
          <p className="py-3">
            (e) responding or taking part in legal proceedings, including
            seeking professional advice, or for the purposes of the legitimate
            and legal interests of the Company or a third party (e.g. the
            interests of our other customers);
          </p>
          <p className="py-3">
            (f) compliance with legal obligations that we are subject to;
          </p>
          <p className="py-3">
            (g) communicating with you and responding to your questions or
            requests;
          </p>
          <p className="py-3">
            (h) direct marketing - we require your consent specifically for this
            purpose and you may opt out any time;
          </p>
          <p className="py-3">
            (i) purposes directly related or incidental to the above; or
          </p>
          <p className="py-3">(j) where you have given consent to it.</p>
          <p className="py-3">
            These reasons for collecting and processing Personal Data determine
            and limit what Personal Data we collect and how we use it (section
            3. below), how long we store it (section 4. below), who has access
            to it (section 5. below) and what rights and other control
            mechanisms are available to you as a user (section 6. below).
          </p>
          <h3 className="py-5 font-bold">
            3. What Data We Collect and Process
          </h3>
          <h4 className="py-5 font-bold">3.1 Basic Account Data</h4>
          <p className="py-3">
            When setting up an Account, the Company will collect your email
            address and country of residence. You are also required to choose a
            user name and a password. The provision of this information is
            necessary to register a User Account. You are responsible for
            keeping this password confidential. We ask you not to share a
            password with anyone.
          </p>
          <p className="py-3">
            During setup of your account, the account is automatically assigned
            a number (the &quot;<span className="font-bold italic">ID</span>
            &quot;) that is later used to reference your user account without
            directly exposing Personally Identifying Information about you.
          </p>
          <h4 className="py-5 font-bold">3.2 Transaction and Payment Data</h4>
          <p className="py-3">
            In order to make a transaction online, you may need to provide
            payment data to the Company to enable the transaction. If you pay by
            credit card, you need to provide typical credit card information
            (name, address, credit card number, expiration date and security
            code) to the Company, which the Company will process and transmit to
            the payment service provider of your choice to enable the
            transaction and perform anti-fraud checks. Likewise, the Company
            will receive data from your payment service provider for the same
            reasons.
          </p>
          <h4 className="py-5 font-bold">
            3.3 Other Data You Explicitly Submit
          </h4>
          <p className="py-3">
            We will collect and process Personal Data whenever you explicitly
            provide it to us or send it as part of communication with others,
            e.g. in forums, chats, or when you provide feedback or other user
            generated content. This data includes:
          </p>
          <p className="py-3">
            (a) Information that you post, comment or follow in any of our
            Content and Services;
          </p>
          <p className="py-3">(b) Information sent through chat;</p>
          <p className="py-3">
            (c) Information you provide when you request information or support
            from us or purchase Content and Services from us, including
            information necessary to process your orders with the relevant
            payment merchant or, in case of physical goods, shipping providers;
          </p>
          <p className="py-3">
            (d) Information you provide to us when participating in
            competitions, contests and tournaments or responding to surveys,
            e.g. your contact details.
          </p>
          <h4 className="py-5 font-bold">3.4 Your Use of the Websites</h4>
          <p className="py-3">
            We collect a variety of information through your general interaction
            with the websites, Content and Services offered by us. Personal Data
            we collect may include, but is not limited to, browser and device
            information, data collected through automated electronic
            interactions and application usage data. Likewise, we will track
            your process across your websites and applications to verify that
            you are not a bot and to optimize our services.
          </p>
          <h4 className="py-5 font-bold">
            3.5 Your Use of Services and other Subscriptions
          </h4>
          <p className="py-3">
            In order to provide you with services, we need to collect, store and
            use various information about your activity in our Content and
            Services. &quot;Content-Related Information&quot; includes your ID,
            as well as information about your preferences, progress, time spent,
            as well as information about the device you are using, including
            what operating system you are using, device settings, unique device
            identifiers, and crash data.
          </p>
          <h4 className="py-5 font-bold">3.6 Tracking Data and Cookies</h4>
          <p className="py-3">
            We use &quot;Cookies&quot;, which are text files placed on your
            computer, to help us analyze how users use our services, and similar
            technologies (e.g. web beacons, pixels, ad tags and device
            identifiers) to recognize you and/or your device(s) on, off and
            across different devices and our services, as well as to improve the
            services we are offering, to improve marketing, analytics or website
            functionality. The use of Cookies is standard on the internet.
            Although most web browsers automatically accept cookies, the
            decision of whether to accept or not is yours. You may adjust your
            browser settings to prevent the reception of cookies, or to provide
            notification whenever a cookie is sent to you. You may refuse the
            use of cookies by selecting the appropriate settings on your
            browser. However, please note that if you do this, you may not be
            able to access the full functionality of our websites. When you
            visit any of our services, our servers log your global IP address,
            which is a number that is automatically assigned to the network your
            computer is part of.
          </p>
          <h4 className="py-5 font-bold">3.7 Third Party Services</h4>
          <p className="py-3">
            This website uses Google Analytics, Google Search Console, Google
            Tag Manager, Google Maps, Facebook Pixel (&quot;
            <span className="font-bold italic">Third Party Service</span>
            &quot;). Third Party Service uses "cookies", which are text files
            placed on visitors' computers, to help the website operators analyze
            how visitors use the site. The information generated by the cookie
            about the visitors' use of the website will generally be transmitted
            to and stored by Third Party Service on servers in the [United
            States]. Please be aware that Company cannot or does not control the
            use of cookies or the resulting information by the Third Party
            Service.
          </p>
          <p className="py-3">
            On behalf of the website operator, Third Party Service will use this
            information for the purpose of evaluating the website / location /
            credentials for its users, in order to compile reports on website
            activity, and to provide other services relating to website activity
            and internet usage for website operators.
          </p>
          <p className="py-3">
            Third Party Service will not associate the IP address transferred
            any other data held by the Company. You may refuse the use of
            cookies by selecting the appropriate settings on your browser.
            However, please note that in this case you may not be able to use
            the full functionality of this website.
          </p>
          <h4 className="py-5 font-bold">3.8 Content Recommendations</h4>
          <p className="py-3">
            We may process information collected under this section 3 so that
            content, products and services shown on the pages and in update
            messages displayed when launching the service can be tailored to
            meet your needs and populated with relevant recommendations and
            offers. This is done to improve your customer experience.
          </p>
          <p className="py-3">
            Subject to your separate consent or where explicitly permitted under
            applicable laws on email marketing, the Company may send you
            marketing messages about products and services offered by the
            Company to your email address. In such a case we may also use your
            collected information to customise such marketing messages as well
            as collect information on whether you opened such messages and which
            links in their text you followed.
          </p>
          <p className="py-3">
            You can opt out or withdraw your consent to receive marketing emails
            at any time by either withdrawing the consent on the same page where
            you previously provided it or clicking the "unsubscribe" link
            provided in every marketing email. Notwithstanding any opt out of
            promotional or marketing emails by you, we reserve the right to
            contact you regarding account status, changes to the user agreement
            and other matters relevant to the underlying service and/or the
            information collected.
          </p>
          <h4 className="py-5 font-bold">
            3.9 Information Required to Detect Violations
          </h4>
          <p className="py-3">
            We collect certain data that is required for our detection,
            investigation and prevention of fraud, cheating and other violations
            of the applicable laws (&quot;
            <span className="font-bold italic">Violations</span>&quot;). This
            data is used only for the purposes of detection, investigation,
            prevention and, where applicable, acting on of such Violations and
            stored only for the minimum amount of time needed for this purpose.
            If the data indicates that a Violation has occurred, we will further
            store the data for the establishment, exercise or defense of legal
            claims during the applicable statute of limitations or until a legal
            case related to it has been resolved. Please note that the specific
            data stored for this purpose may not be disclosed to you if the
            disclosure will compromise the mechanism through which we detect,
            investigate and prevent such Violations.
          </p>
          <h3 className="py-5 font-bold">4. How We Store Data</h3>
          <h4 className="py-5 font-bold">4.1 Period of Storage</h4>
          <p className="py-3">
            We will store your information as long as necessary to fulfil the
            purposes for which the information is collected and processed or —
            where the applicable law provides for longer storage and retention
            period — for the storage and retention period required by law. In
            particular, if you terminate your User Account, your Personal Data
            will be marked for deletion except to the degree legal requirements
            or other prevailing legitimate purposes dictate a longer storage.
            All your data and credits will be lost after deletion.
          </p>
          <h4 className="py-5 font-bold">4.2 Deletion of Data</h4>
          <p className="py-3">
            In cases where Personal Data cannot be completely deleted in order
            to ensure the consistency of the system, the user experience or the
            community, your information will be permanently anonymized. Please
            note that the Company is required to retain certain transactional
            data under statutory commercial and tax law for a period of up to
            ten (10) years.
          </p>
          <p className="py-3">
            If you withdraw your consent on which a processing of your Personal
            Data, we will delete your Personal Data without undue delay to the
            extent that the collection and processing of the Personal Data was
            based on the withdrawn consent.
          </p>
          <p className="py-3">
            If you exercise a right to object to the processing of your Personal
            Data, we will review your objection and delete your Personal Data
            that we processed for the purpose to which you objected without
            undue delay, unless another legal basis for processing and retaining
            this data exists or unless applicable law requires us to retain the
            data.
          </p>
          <h4 className="py-5 font-bold">4.3 Location of Storage</h4>
          <p className="py-3">
            The data that we collect from you may be transferred to, and stored
            at United States, or a destination outside of your jurisdiction. It
            may also be processed by third parties who operate outside of your
            jurisdiction. By submitting your personal data you agree to this
            transfer, storing or processing of data outside of your
            jurisdiction. We will take all steps reasonably necessary to ensure
            that your data is treated securely in accordance with this privacy
            policy.
          </p>
          <h3 className="py-5 font-bold">5. Who Has Access to Data</h3>
          <p className="py-3">
            5.1 The Company and its subsidiaries may share your Personal Data
            with each other and use it to the degree necessary to achieve the
            purposes listed in section 2 above. This includes our overseas
            offices, affiliates, business partners and counterparts (on a
            need-to-know basis only). In the event of a reorganization, sale or
            merger we may transfer Personal Data to the relevant or proposed
            transferees of our operations (or a substantial part thereof) in any
            part of the world.
          </p>
          <p className="py-3">
            5.2 We may also share your Personal Data with our third party
            providers that provide customer support services in connection with
            goods, Content and Services distributed via us. Your Personal Data
            will be used in accordance with this Privacy Policy and only as far
            as this is necessary for performing customer support services.
          </p>
          <p className="py-3">
            5.3 We may also share your information with our personnel, agents,
            advisers, auditors, contractors, financial institutions, and service
            providers in connection with our operations or services (for example
            staff engaged in the fulfilment of your order, the processing of
            your payment and the provision of support services); persons under a
            duty of confidentiality to us; or persons to whom we are required to
            make disclosure under applicable laws and  regulations in any part
            of the world.
          </p>
          <p className="py-3">
            5.4 In accordance with internet standards, we may also share certain
            information (including your IP address and the identification of
            content you wish to access) with our third party network providers
            that provide content delivery network services and server services
            in connection with us. Our content delivery network providers enable
            the delivery of digital content you have requested, by using a
            system of distributed servers that deliver the content to you, based
            on your geographic location.
          </p>
          <p className="py-3">
            5.5 The Company may allow you to link your User Account to an
            account offered by a third party. If you consent to link the
            accounts, the Company may collect and combine information you
            allowed the Company to receive from a third party with information
            of your User Account to the degree allowed by your consent at the
            time. If the linking of the accounts requires the transmission of
            information about your person from the Company to a third party, you
            will be informed about it before the linking takes place and you
            will be given the opportunity to consent to the linking and the
            transmission of your information. The third party's use of your
            information will be subject to the third party's privacy policy,
            which we encourage you to review.
          </p>
          <p className="py-3">
            5.6 The Company may release Personal Data to comply with court
            orders or laws and regulations that require us to disclose such
            information.
          </p>
          <p className="py-3">
            5.7 We make certain data related to your User Account available to
            other users. This information can be accessed by anyone by querying
            your ID. At a minimum, the public persona name you have chosen to
            represent you are accessible this way. The accessibility of any
            additional info about you can be controlled through your user
            profile page; data publicly available on your profile page can be
            accessed automatically. While we do not knowingly share Personally
            Identifying Information about you such as your real name or your
            email address, any information you share about yourself on your
            public profile can be accessed, including information that may make
            you identifiable.
          </p>
          <p className="py-3">
            5.8 The community includes message boards, forums and/or chat areas,
            where users can exchange ideas and communicate with each other. When
            posting a message to a board, forum or chat area, please be aware
            that the information is being made publicly available online;
            therefore, you are doing so at your own risk; and that such
            information can be collected, correlated and used by third parties
            and may result in unsolicitated messages from other posters or third
            parties and these activities are beyond our control. If your
            Personal Data is posted on one of our community forums against your
            will, please use the reporting function and the help site to request
            its removal.
          </p>
          <h3 className="py-5 font-bold">
            6. Your Rights and Control Mechanisms
          </h3>
          <p className="py-3">You have the right to:</p>
          <p className="py-3">
            (a) check whether we hold personal data about you;
          </p>
          <p className="py-3">
            (b) access any personal data we hold about you;
          </p>
          <p className="py-3">
            (c) require us to correct any inaccuracy or error in any personal
            data we hold about you;
          </p>
          <p className="py-3">
            (d) request for the deletion of your personal data through the
            deletion of user account. The data protection laws of the European
            Economic Area and other territories grant their citizens certain
            rights in relation to their Personal Data. While other jurisdictions
            may provide fewer statutory rights to their citizens, we make the
            tools designed to exercise such rights available to our customers
            worldwide.
          </p>
          <p className="py-3">
            As a resident of the European Economic Area you have the following
            rights in relation to your Personal Data:
          </p>
          <h4 className="py-5 font-bold">6.1 Right of Access</h4>
          <p className="py-3">
            You have the right to access your Personal Data that we hold about
            you, i.e. the right to require free of charge (i) information
            whether your Personal Data is retained, (ii) access to and/or (iii)
            duplicates of the Personal Data retained. You can use the right to
            access to your Personal Data through the Privacy Dashboard. If the
            request affects the rights and freedoms of others or is manifestly
            unfounded or excessive, we reserve the right to charge a reasonable
            fee (taking into account the administrative costs of providing the
            information or communication or taking the action requested) or
            refuse to act on the request.
          </p>
          <h4 className="py-5 font-bold">6.2 Right to Rectification</h4>
          <p className="py-3">
            If we process your Personal Data, we shall endeavor to ensure by
            implementing suitable measures that your Personal Data is accurate
            and up-to-date for the purposes for which it was collected. If your
            Personal Data is inaccurate or incomplete, you can change the
            information you provided via the Privacy Dashboard.
          </p>
          <h4 className="py-5 font-bold">6.3. Right to Erasure</h4>
          <p className="py-3">
            You have the right to obtain deletion by us of Personal Data
            concerning you by deleting your User Account via the support page.
          </p>
          <p className="py-3">
            As a result of deleting your User Account, you will lose access to
            services, including the User Account, Subscriptions and
            service-related information linked to the User Account and the
            possibility to access other services you are using the User Account
            for.
          </p>
          <p className="py-3">
            We allow you to restore your User Account during a grace period of
            30 (thirty) days from the moment you request deletion of your User
            Account. This functionality allows you not to lose your account by
            mistake, because of your loss of your account credentials or due to
            hacking. During the suspension period, we will be able to finalize
            financial and other activities that you may have initiated before
            sending the User Account deletion request. After the grace period,
            Personal Data associated with your account will be deleted subject
            to section 4. above.
          </p>
          <p className="py-3">
            In some cases, deletion of your User Account, and therefore Personal
            Data deletion, is complicated. In some cases, considering the
            complexity and number of the requests, the period for Personal Data
            erasure may be extended, but for no longer than two further months.
          </p>
          <h4 className="py-5 font-bold">6.4 Right to Object</h4>
          <p className="py-3">
            When our processing of your Personal Data is based on legitimate
            interests according to Article 6(1)(f) of the GDPR / section 2.c) of
            this Privacy Policy, you have the right to object to this
            processing. If you object we will no longer process your Personal
            Data unless there are compelling and prevailing legitimate grounds
            for the processing as described in Article 21 of the GDPR; in
            particular if the data is necessary for the establishment, exercise
            or defense of legal claims. You also have the right to lodge a
            complaint at a supervisory authority.
          </p>
          <h3 className="py-5 font-bold">7. Children</h3>
          <p className="py-3">
            The minimum age to create a User Account is 18. the Company will not
            knowingly collect Personal Data from children under this age.
            Insofar as certain countries apply a higher age of consent for the
            collection of Personal Data, the Company requires parental consent
            before a User Account can be created and Personal Data associated
            with it collected. The Company encourages parents to instruct their
            children to never give out personal information when online.
          </p>
          <h3 className="py-5 font-bold">8. Contact Info</h3>
          <p className="py-3">
            You can contact the Company's data protection officer at the address
            below.
          </p>
          <p className="py-3">
            While we review any request sent by mail, please be aware that to
            combat fraud, harassment and identity theft, the only way to access,
            rectify or delete your data is through logging in with your User
            Account or contacting us at{' '}
            <a href={company.emailHref} target="_blank" rel="noreferrer">
              {company.email}
            </a>
            .
          </p>
          <h3 className="py-5 font-bold">9. Revision Date</h3>
          <p className="py-3">
            This privacy policy was last updated on 21 May 2021 (&quot;
            <span className="font-bold italic">Revision Date</span>&quot;). If
            you were a user before the Revision Date, it replaces the existing
            Privacy Policy. The Company reserves the right to change this policy
            at any time by notifying the users of the existence of a new privacy
            statement. This policy is not intended to and does not create any
            contractual or legal rights in or behalf of any party.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default PrivacyPage;
