/**
 * 如果children是 string，就用Text包装，否则直接返回
 */
import React from 'react';
import Text from './Text';

export default function TextPrune(props) {
  const { children, ...rest } = props;

  if (typeof children === 'string') {
    return (<Text {...rest}>{children}</Text>);
  }
  return children || null;
}

TextPrune.propTypes = {
  ...Text.propTypes
};
