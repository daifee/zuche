
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { TimeHours as styles } from './styles';


export default function TimeHour(props) {
  const { date, onPress } = props;

  return (
    <ItemBox title="周日" onPress={onPress}>
      <Text style={styles.text}>{date.getHours()}:00</Text>
    </ItemBox>
  );
}

TimeHour.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onPress: PropTypes.func
};
