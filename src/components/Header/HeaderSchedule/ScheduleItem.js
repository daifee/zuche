import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../../Text';
import { ScheduleItem as styles } from './styles';

const textAlignStyleMap = {
  left: styles.textAlignLeft,
  right: styles.textAlignRight
};

export default function ScheduleItem(props) {
  const { textAlign } = props;
  const textAlignStyle = textAlignStyleMap[textAlign];

  return (
    <View style={styles.container}>
      <Text level="h4" style={[styles.title, textAlignStyle]}>洛杉矶</Text>
      <Text style={[styles.desc, textAlignStyle]}>05-21 10:00</Text>
    </View>
  );
}

ScheduleItem.defaultProps = {
  textAlign: 'left'
};

ScheduleItem.propTypes = {
  textAlign: PropTypes.oneOf(['left', 'right'])
};
