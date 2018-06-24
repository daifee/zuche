import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import CityModel from '../../../models/City.Model';
import { City as styles } from './styles';

export default function City(props) {
  const { title, city, ...rest } = props;
  const empty = !city;
  const textStyle = [styles.text];
  if (empty) textStyle.push(styles.placeholderText);

  return (
    <ItemBox {...rest} title={title} style={styles.container}>
      <Text style={[textStyle]}>
        {empty ? '请选择' : city.cnName}
      </Text>
    </ItemBox>
  );
}

City.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.instanceOf(CityModel)
};
