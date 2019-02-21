import React from 'react';
import { Box, Link } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Outer = styled(Box)`
  height: ${props => props.height};
  width: 100%;
  background-color: #000;
  margin-bottom: 1.45rem;
  text-align: center;
`;

export const Masthead = ({ height, siteTitle }) => {
  return (
    <Outer height={height}>
      <Link
        href='/'
        style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: `Electrolize`
        }}
      >
        {siteTitle}
      </Link>
    </Outer>
  );
};

Masthead.propTypes = {
  height: PropTypes.string.isRequired,
  siteTitle: PropTypes.string
};
