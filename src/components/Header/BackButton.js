import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { BackButton as styles } from './styles';
import { TEXT_COLOR_SECONDARY, FONT_SIZE } from '../../styles';
import { viewStyle } from '../../propTypes';


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
  style: viewStyle,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string
};

