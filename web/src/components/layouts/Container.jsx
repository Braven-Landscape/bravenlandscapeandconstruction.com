import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ type, children, containerStyling }) => {
  switch (type) {
    case 'full':
      return (
        <div className={`mx-auto sm:px-6 lg:px-8 ${containerStyling}`}>
          {children}
        </div>
      );
    case 'sm':
      return (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerStyling}`}
        >
          {children}
        </div>
      );
    case 'lg':
      return (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerStyling}`}
        >
          <div className="max-w-3xl mx-auto">{children}</div>
        </div>
      );
    case 'breaks':
      return (
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerStyling}`}
        >
          {children}
        </div>
      );
  }
};

Container.defaultProps = {
  type: `sm`,
};

Container.propTypes = {
  type: PropTypes.string,
};

export default Container;
