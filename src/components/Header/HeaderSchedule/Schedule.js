import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../../Text';
import { Schedule as styles } from './styles';
import ScheduleItem from './ScheduleItem';
import SearchParamsModel from '../../../models/SearchParams.Model';

export default function Schedule(props) {
  const { searchParams } = props;

  if (!searchParams) {
    return <Text>loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScheduleItem
        textAlign="right"
        city={searchParams.pickupCity}
        date={searchParams.pickupDate}
      />
      <View style={styles.daysContainer}>
        <Text style={styles.days}>共{searchParams.totalDays}天</Text>
      </View>
      <ScheduleItem
        city={searchParams.dropoffCity}
        date={searchParams.dropoffDate}
      />
    </View>
  );
}

Schedule.propTypes = {
  searchParams: PropTypes.instanceOf(SearchParamsModel)
};
