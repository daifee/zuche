
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { TimeAmount as styles } from './styles';


export default function TimeAmount(props) {
  const { days } = props;

  return (
    <ItemBox style={styles.container} title="">
      <Text style={styles.text}>{days}天</Text>
    </ItemBox>
  );
}

TimeAmount.propTypes = {
  days: PropTypes.number.isRequired
};
