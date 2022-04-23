import React from 'react';
import PropTypes from 'prop-types';

const NavButton = (props) => {
  const { children, onClick } = props;

  return (
    <button
      type="button"
      className="text-xl transition-transform transform cursor-pointer hover:animate-pulse"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

NavButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

NavButton.defaultProps = {
  children: null,
  onClick: () => {},
};

export default NavButton;
