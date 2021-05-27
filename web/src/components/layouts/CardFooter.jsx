import React from 'react';

const CardHeader = ({ footerContent, footerStyling }) => {
  return (
    <div className={`px-4 py-5 sm:px-6 ${footerStyling}`}>{footerContent}</div>
  );
};

export default CardHeader;
