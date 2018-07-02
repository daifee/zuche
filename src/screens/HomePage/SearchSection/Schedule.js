import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Time from './Time';
import TimeAmount from './TimeAmount';
import { Schedule as styles } from './styles';
import { dispatch as globalDespatch } from '../../../store';

import { AnimatedDatePickerApi } from '../../../components/AnimatedDatePicker';
import SearchParamsModel from '../../../models/SearchParams.Model';

function Schedule(props) {
  const { pickupDate, dropoffDate, totalDays } = props.searchParams;

  return (
    <View style={styles.container}>
      <Time
        title="取车时间"
        date={pickupDate}
        onPress={() => {
          const minimumDate = new Date();
          const maximumDate = new Date();
          maximumDate.setFullYear(maximumDate.getFullYear() + 1);

          AnimatedDatePickerApi.show({
            date: pickupDate,
            minimumDate: minimumDate,
            maximumDate: maximumDate,
            onConfirm(date) {
              globalDespatch({
                type: 'searchParams/setPickupDate',
                payload: date
              });
            }
          });
        }}
      />
      <TimeAmount days={totalDays} />
      <Time
        title="还车时间"
        date={dropoffDate}
        onPress={() => {
          const minimumDate = pickupDate;
          const maximumDate = new Date();
          maximumDate.setFullYear(maximumDate.getFullYear() + 1);

          AnimatedDatePickerApi.show({
            date: dropoffDate,
            minimumDate: minimumDate,
            maximumDate: maximumDate,
            onConfirm(date) {
              globalDespatch({
                type: 'searchParams/setDropoffDate',
                payload: date
              });
            }
          });
        }}
      />
    </View>
  );
}

Schedule.propTypes = {
  searchParams: PropTypes.instanceOf(SearchParamsModel),
};


export default Schedule;
