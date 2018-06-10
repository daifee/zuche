import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import { SideMenuItem as styles } from './styles';
import { TextPrune } from '../Text';
import { ITEM_BG_COLOR } from '../../styles';
import { textStyle } from '../../propTypes';


export default function SideMenuItem(props) {
  const {
    style, textStyle, children, onPress, selected, underlayColor, ...rest
  } = props;

  const selectedStyle = selected ? {
    container: styles.containerSelected,
    text: styles.textSelected,
    divider: styles.dividerSelected
  } : {};

  return (
    <TouchableHighlight
      {...rest}
      onPress={selected ? undefined : onPress}
      style={[styles.container, selectedStyle.container, style]}
    >
      <React.Fragment>
        <TextPrune
          style={[styles.text, selectedStyle.text, textStyle]}
        >
          {children}
        </TextPrune>

        {selected && (
          <View style={styles.selectedLabelContainer}>
            <View style={[styles.selectedLabel]} />
          </View>
        )}

        <View style={[styles.divider, selectedStyle.divider]} />
      </React.Fragment>
    </TouchableHighlight>
  );
}

SideMenuItem.defaultProps = {
  selected: false,
  underlayColor: ITEM_BG_COLOR
};

SideMenuItem.propTypes = {
  ...TouchableHighlight.propTypes,
  underlayColor: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.bool,
  textStyle: textStyle
};
