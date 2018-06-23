
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Time as styles } from './styles';
import TimeDay from './TimeDay';
import TimeHours from './TimeHours';


export default function Time(props) {
  const { title, date, onPress } = props;

  return (
    <View style={styles.container}>
      <TimeDay
        date={date}
        title={title}
        onPress={onPress}
      />
      <TimeHours date={date} onPress={onPress} />
    </View>
  );
}

Time.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onPress: PropTypes.func
};
