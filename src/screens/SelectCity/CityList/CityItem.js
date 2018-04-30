import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import City from '../../../models/City';
import { CityItem as styles } from './styles';
import { ITEM_BG_COLOR_ACTIVE } from '../../../styles';


export default function CityItem(props) {
  const { city, selected, ...rest } = props;

  return (
    selected
      ? (
        <View {...rest} style={[styles.container, styles.containerSelected]}>
          <Text>{city.cnName}</Text>
        </View>
      )
      : (
        <TouchableHighlight
          {...rest}
          style={styles.container}
          underlayColor={ITEM_BG_COLOR_ACTIVE}
          onPress={() => {}}
        >
          <Text>{city.cnName}</Text>
        </TouchableHighlight>
      )
  );
}

CityItem.propTypes = {
  city: PropTypes.instanceOf(City).isRequired,
  selected: PropTypes.bool.isRequired
};
