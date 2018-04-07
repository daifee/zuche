
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Time as styles } from './styles';
import TimeDay from './TimeDay';
import TimeHours from './TimeHours';

const configMap = {
  pickup: {
    title: '取车时间',
  },
  dropoff: {
    title: '还车时间',
  },
};

export default function Time(props) {
  const { type, date } = props;
  const config = configMap[type];

  return (
    <View style={styles.container}>
      <TimeDay date={date} title={config.title} />
      <TimeHours date={date} />
    </View>
  );
}

Time.propTypes = {
  type: PropTypes.oneOf(['pickup', 'dropoff']).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
