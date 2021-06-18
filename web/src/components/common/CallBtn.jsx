import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const CallBtn = () => {
  const data = useStaticQuery(graphql`
    query CallBtnQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
    }
  `);

  const phone = data.phoneNumber.siteMetadata;

  return (
    <a
      href={phone.phoneHref}
      className="block lg:hidden fixed bottom-2 right-2 z-50 drop-shadow-dark fa-stack fa-2x"
    >
      <i className="fas fa-circle fa-stack-2x text-primary" />
      <i className="fas fa-phone fa-stack-1x text-accent fa-inverse" />
    </a>
  );
};

export default CallBtn;
