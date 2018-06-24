
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { TimeDay as styles } from './styles';
import SearchParamsModel from '../../../models/SearchParams.Model';


export default function TimeDay(props) {
  const { date, title, ...rest } = props;

  return (
    <ItemBox
      {...rest}
      title={title}
      style={styles.container}
    >
      <Text style={styles.text}>{SearchParamsModel.monthDate(date)}</Text>
    </ItemBox>
  );
}

TimeDay.propTypes = {
  ...ItemBox.propTypes,
  // eslint-disable-next-line
  children: PropTypes.any,

  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
};
