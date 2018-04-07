import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Time, { TimeAmount } from './Time';
import { Schedule as style } from './styles';

export default function Schedule(props) {
  const { pickupDate, dropoffDate } = props;

  return (
    <View style={style.container}>
      <Time type="pickup" date={pickupDate} />
      <TimeAmount />
      <Time type="dropoff" date={dropoffDate} />
    </View>
  );
}

Schedule.defaultProps = {
  pickupDate: new Date(),
  dropoffDate: new Date(),
};

Schedule.propTypes = {
  pickupDate: PropTypes.instanceOf(Date),
  dropoffDate: PropTypes.instanceOf(Date),
};
