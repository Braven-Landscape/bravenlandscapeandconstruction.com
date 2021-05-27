import React from 'react';

const classes = {
  nav: 'bg-white shadow',
  wrapperNav: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  wrapperContent: 'flex justify-between h-16',
};

const Bar = ({ children }) => {
  return (
    <nav class={classes.nav}>
      <div class={classes.wrapperNav}>
        <div class={classes.wrapperContent}>{children}</div>
      </div>
    </nav>
  );
};

export default Bar;
