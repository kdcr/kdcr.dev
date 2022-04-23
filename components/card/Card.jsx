import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const containerClasses = (active) => classNames({
  'bg-blue-500': true,
  'h-30': true,
  'w-20': !active,
});

const Card = (props) => {
  const { children, active } = props;

  return (
    <div className={containerClasses(active)}>{children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};

Card.defaultProps = {
  children: null,
  active: false,
};

export default Card;
