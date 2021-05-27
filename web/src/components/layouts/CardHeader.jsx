import React from 'react';

const CardHeader = ({ headerContent, headerStyling }) => {
  return (
    <div className={`px-4 py-5 sm:px-6 ${headerStyling}`}>{headerContent}</div>
  );
};

export default CardHeader;
