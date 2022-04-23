import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};

export default MyApp;
