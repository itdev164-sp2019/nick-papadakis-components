// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

type Props = {
  children: PropTypes.node
};

export const Header = (props: PropTypes.node) => (
  <BaseContainer as='header' {...props} />
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};
