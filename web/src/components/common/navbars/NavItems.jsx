import React from 'react';
import { Link } from 'gatsby';

const classes = {
  wrapperNavItems: 'hidden sm:ml-6 sm:flex sm:space-x-8',
  navItem:
    'border-transparent text-gray-500 hover:border-yellow-400 hover:text-yellow-500 inline-flex items-center px-1 pt-1 text-lg font-medium',
  activeNavItem:
    'border-transparent text-yellow-500 hover:border-indigo-400 hover:text-indigo-500 inline-flex items-center px-1 pt-1 text-lg font-medium',
};

const NavItems = ({
  item1Link,
  item1Text,
  item2Link,
  item2Text,
  item3Link,
  item3Text,
  item4Link,
  item4Text,
}) => {
  return (
    <div className={classes.wrapperNavItems}>
      {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
      <Link
        to={item1Link}
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
      >
        {item1Text}
      </Link>
      <Link
        to={item2Link}
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
      >
        {item2Text}
      </Link>
      <Link
        to={item3Link}
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
      >
        {item3Text}
      </Link>
      <Link
        to={item4Link}
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
      >
        {item4Text}
      </Link>
    </div>
  );
};

export default NavItems;
