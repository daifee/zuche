import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { BackButton as styles } from './styles';
import { TEXT_COLOR_SECONDARY, FONT_SIZE } from '../../styles';

const ViewPropTypesStyle = View.propTypes.style;

export default function BackButton(props) {
  const {
    style, iconSize, iconColor, ...rest
  } = props;

  return (
    <TouchableOpacity {...rest} style={[styles.container, style]}>
      <SimpleLineIcons name="arrow-left" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

BackButton.defaultProps = {
  iconSize: FONT_SIZE.md,
  iconColor: TEXT_COLOR_SECONDARY
};


BackButton.propTypes = {
  style: ViewPropTypesStyle,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string
};

