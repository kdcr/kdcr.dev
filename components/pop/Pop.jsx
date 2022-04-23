import React from 'react';
/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: red;
  transform-origin: top;
`;

const Pop = (props) => {
  const { children } = props;

  return (
    <Container className="flex items-center justify-center border-2 rounded animate-popdown">
      {children}
    </Container>
  );
};

Pop.propTypes = {
  children: PropTypes.node,
};

Pop.defaultProps = {
  children: null,
};

export default Pop;
