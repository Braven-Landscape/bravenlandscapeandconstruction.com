import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const classes = {
  wrapperLogo: 'flex-shrink-0 flex items-center',
};

const NavLogo = ({ children }) => (
  <div className={classes.wrapperLogo}>
    <Link to="/">{children}</Link>
  </div>
);

NavLogo.defaultProps = {
  children: ``,
};

NavLogo.propTypes = {
  children: PropTypes.node,
};

export default NavLogo;
