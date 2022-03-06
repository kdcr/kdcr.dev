import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { children } = props;

  return (
    <div>{children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
