
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { TimeHours as styles } from './styles';

const mapDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

export default function TimeHour(props) {
  const { date, onPress } = props;

  return (
    <ItemBox title={mapDays[date.getDay()]} onPress={onPress}>
      <Text style={styles.text}>
        {date.getHours()}:{date.getMinutes()}
      </Text>
    </ItemBox>
  );
}

TimeHour.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onPress: PropTypes.func
};
