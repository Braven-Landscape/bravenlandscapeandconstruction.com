import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const CallBtn = () => {
  const data = useStaticQuery(graphql`
    query CallBtnQ {
      sanitySettingsCompany {
        phoneHref
      }
    }
  `);

  const company = data.sanitySettingsCompany;


  return (
    <a
      href={company.phoneHref}
      className="block lg:hidden fixed bottom-2 right-2 z-50 drop-shadow-dark fa-stack fa-2x"
    >
      <span className="outline"><i className="fas fa-circle fa-stack-2x text-primary" /></span>
      <i className="fas fa-phone fa-stack-1x text-accent fa-inverse" />
    </a>
  );
};

export default CallBtn;
