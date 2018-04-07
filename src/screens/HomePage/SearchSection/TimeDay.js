
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { TimeDay as styles } from './styles';

export default function TimeDay(props) {
  const { date, title } = props;

  return (
    <ItemBox title={title} style={styles.timeDayContainer}>
      <Text style={styles.text}>12月{date.getDay()}日</Text>
    </ItemBox>
  );
}

TimeDay.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
