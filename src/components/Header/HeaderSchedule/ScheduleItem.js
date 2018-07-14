import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import dayjs from 'dayjs';
import Text from '../../Text';
import { ScheduleItem as styles } from './styles';
import CityModel from '../../../models/City.Model';

const textAlignStyleMap = {
  left: styles.textAlignLeft,
  right: styles.textAlignRight
};

export default function ScheduleItem(props) {
  const { textAlign, city, date } = props;
  const textAlignStyle = textAlignStyleMap[textAlign];

  const day = dayjs(date).format('MM-DD HH:mm');

  return (
    <View style={styles.container}>
      <Text level="h4" style={[styles.title, textAlignStyle]}>{city.cnName}</Text>
      <Text style={[styles.desc, textAlignStyle]}>{day}</Text>
    </View>
  );
}

ScheduleItem.defaultProps = {
  textAlign: 'left'
};

ScheduleItem.propTypes = {
  textAlign: PropTypes.oneOf(['left', 'right']),
  date: PropTypes.instanceOf(Date).isRequired,
  city: PropTypes.instanceOf(CityModel).isRequired
};
