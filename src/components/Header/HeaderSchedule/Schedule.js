import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../../Text';
import { Schedule as styles } from './styles';
import ScheduleItem from './ScheduleItem';

export default function Schedule() {
  return (
    <View style={styles.container}>
      <ScheduleItem textAlign="right" />
      <View style={styles.daysContainer}>
        <Text style={styles.days}>共7天</Text>
      </View>
      <ScheduleItem />
    </View>
  );
}
