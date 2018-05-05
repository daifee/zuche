import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button';
import { ButtonPrimary as styles } from './styles';
import { COLOR } from '../../styles';

export default function ButtonPrimary(props) {
  const { style, textStyle, ...rest } = props;
  return (
    <Button
      underlayColor={COLOR.primaryActive}
      {...rest}
      style={[styles.container, style]}
      textStyle={[styles.textStyle, textStyle]}
    />
  );
}

ButtonPrimary.propTypes = {
  ...Button.propTypes
};
