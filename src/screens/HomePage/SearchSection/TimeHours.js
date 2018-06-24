
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { TimeHours as styles } from './styles';
import SearchParamsModel from '../../../models/SearchParams.Model';


export default function TimeHour(props) {
  const { date, onPress } = props;

  return (
    <ItemBox title={SearchParamsModel.week(date)} onPress={onPress}>
      <Text style={styles.text}>
        {SearchParamsModel.hoursMinutes(date)}
      </Text>
    </ItemBox>
  );
}

TimeHour.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onPress: PropTypes.func
};
