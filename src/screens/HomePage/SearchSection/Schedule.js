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
      <Time
        title="取车时间"
        date={pickupDate}
        onPress={() => {
          console.warn('TODO');
        }}
      />
      <TimeAmount days={7} />
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

Schedule.defaultProps = {
  pickupDate: new Date(),
  dropoffDate: new Date(),
};

Schedule.propTypes = {
  pickupDate: PropTypes.instanceOf(Date),
  dropoffDate: PropTypes.instanceOf(Date),
};
