import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Time from './Time';
import TimeAmount from './TimeAmount';
import { Schedule as styles } from './styles';

export default function Schedule(props) {
  const { pickupDate, dropoffDate } = props;

  return (
    <View style={styles.container}>
      <Time type="pickup" date={pickupDate} />
      <TimeAmount days={7} />
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
