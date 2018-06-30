import React from 'react';
import PropTypes from 'prop-types';
import CheckButton from '../../../components/CheckButton';
import CityModel from '../../../models/City.Model';
import { CityItem as styles } from './styles';


export default function CityItem(props) {
  const { city, selected, ...rest } = props;

  return (
    <CheckButton
      {...rest}
      style={styles.container}
      checked={selected}
    >
      {city.cnName}
    </CheckButton>
  );
}

CityItem.propTypes = {
  city: PropTypes.instanceOf(CityModel).isRequired,
  selected: PropTypes.bool.isRequired
};
