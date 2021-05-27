import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const Card = ({
  type,
  children,
  headerContent,
  headerStyling,
  footerContent,
  footerStyling,
  cardStyling,
}) => {
  switch (type) {
    case 'basic':
      return (
        <div className={`${cardStyling} overflow-hidden shadow rounded-lg`}>
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      );
    case 'full':
      return (
        <div className={`${cardStyling} overflow-hidden shadow sm:rounded-lg`}>
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      );
    case 'header':
      return (
        <div
          className={`${cardStyling} overflow-hidden shadow rounded-lg divide-y divide-gray-200`}
        >
          <CardHeader
            headerContent={headerContent}
            headerStyling={headerStyling}
          />
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      );
    case 'footer':
      return (
        <div
          className={`${cardStyling} overflow-hidden shadow rounded-lg divide-y divide-gray-200`}
        >
          <div className="px-4 py-5 sm:p-6">{children}</div>
          <CardFooter
            footerContent={footerContent}
            footerStyling={footerStyling}
          />
        </div>
      );
    case 'both':
      return (
        <div
          className={`${cardStyling} overflow-hidden shadow rounded-lg divide-y divide-gray-200`}
        >
          <CardHeader
            headerContent={headerContent}
            headerStyling={headerStyling}
          />
          <div className="px-4 py-5 sm:p-6">{children}</div>
          <CardFooter
            footerContent={footerContent}
            footerStyling={footerStyling}
          />
        </div>
      );
  }
};

Card.defaultProps = {
  type: `sm`,
};

Card.propTypes = {
  type: PropTypes.string,
};

export default Card;
