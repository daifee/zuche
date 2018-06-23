import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Time from './Time';
import TimeAmount from './TimeAmount';
import { Schedule as styles } from './styles';
import {
  getState as globalGetState,
  dispatch as globalDespatch
} from '../../../store';

import { AnimatedDatePickerApi } from '../../../components/AnimatedDatePicker';

function Schedule(props) {
  const { pickupDate, dropoffDate } = props;

  let totalDays = ((dropoffDate.getTime() - pickupDate.getTime()) / 1000 / 60 / 60 / 24) + 1;
  totalDays = Math.ceil(totalDays);

  return (
    <View style={styles.container}>
      <Time
        title="取车时间"
        date={pickupDate}
        onPress={() => {
          AnimatedDatePickerApi.show({
            date: pickupDate,
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
          console.warn('TODO');
        }}
      />
    </View>
  );
}

Schedule.propTypes = {
  pickupDate: PropTypes.instanceOf(Date),
  dropoffDate: PropTypes.instanceOf(Date),
};


export default connect((realState, props) => {
  const state = globalGetState();
  const { searchParams } = state;
  return {
    ...props,
    pickupDate: searchParams.pickupDate,
    dropoffDate: searchParams.dropoffDate
  };
})(Schedule);
