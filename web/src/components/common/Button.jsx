import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Button = ({
  type,
  btnLink,
  btnLabel,
  bgWidth,
  bgHeight,
  bgColor,
  bgColorHover,
  textSize,
  textWeight,
  textColor,
  textColorHover,
  borderColor,
  borderColorHover,
  borderRadius,
  btnShadow,
  focusColor,
}) => {
  switch (type) {
    default:
      return (
        <Link
          to={btnLink}
          className={`inline-flex items-center ${bgWidth} ${bgHeight} ${bgColor} ${bgColorHover} ${textSize} ${textWeight} ${textColor} ${textColorHover} border ${borderColor} ${borderColorHover} ${borderRadius} ${btnShadow} focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusColor} hover:-translate-y-0.5 translate transform`}
        >
          <span className="drop-shadow">{btnLabel}</span>
        </Link>
      );
    case 'internal':
      return (
        <Link
          to={btnLink}
          className={`inline-flex items-center ${bgWidth} ${bgHeight} ${bgColor} ${bgColorHover} ${textSize} ${textWeight} ${textColor} ${textColorHover} border ${borderColor} ${borderColorHover} ${borderRadius} ${btnShadow} focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusColor} hover:-translate-y-0.5 translate transform`}
        >
          <span className="drop-shadow">{btnLabel}</span>
        </Link>
      );
    case 'external':
      return (
        <a
          href={btnLink}
          className={`inline-flex items-center ${bgWidth} ${bgHeight} ${bgColor} ${bgColorHover} ${textSize} ${textWeight} ${textColor} ${textColorHover} border ${borderColor} ${borderColorHover} ${borderRadius} ${btnShadow} focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusColor} hover:-translate-y-0.5 translate transform`}
        >
          <span className="drop-shadow">{btnLabel}</span>
        </a>
      );
  }
};

Button.defaultProps = {
  type: `internal`,
  btnLink: `/contact/`,
  btnLabel: `Schedule Free Quote`,
  bgWidth: `px-6`,
  bgHeight: `py-3`,
  bgColor: `bg-accent`,
  bgColorHover: `hover:bg-primary`,
  textSize: `text-lg`,
  textWeight: `font-medium`,
  textColor: `text-white`,
  textColorHover: `text-white`,
  borderColor: `border-transparent`,
  borderColorHover: `border-gray-50`,
  borderRadius: `rounded-md`,
  btnShadow: `shadow-md`,
  focusColor: `focus:ring-gray-500`,
};

Button.propTypes = {
  type: PropTypes.string,
  btnLink: PropTypes.string,
  btnLabel: PropTypes.string,
  bgWidth: PropTypes.string,
  bgHeight: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  textSize: PropTypes.string,
  textWeight: PropTypes.string,
  textColor: PropTypes.string,
  textColorHover: PropTypes.string,
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  borderRadius: PropTypes.string,
  btnShadow: PropTypes.string,
  focusColor: PropTypes.string,
};

export default Button;
