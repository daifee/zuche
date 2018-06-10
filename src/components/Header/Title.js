import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { textStyle } from '../../propTypes';


export default function Title(props) {
  const { content, ...rest } = props;
  return (<Text level="h2" {...rest}>{content}</Text>);
}

Title.propTypes = {
  content: PropTypes.string,
  style: textStyle
};
