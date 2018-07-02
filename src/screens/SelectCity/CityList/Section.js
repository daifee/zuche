import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CityItem from './CityItem';
import { Section as styles } from './styles';
import CityModel from '../../../models/City.Model';

export default function Section(props) {
  const { section, onPressItem, selectedCity } = props;

  return (
    <View style={styles.container}>{section.data.map((city) => {
      const key = `${city.id}`;
      const selected = selectedCity && selectedCity.id === city.id;

      return (
        <View key={key} style={styles.itemWrapper}>
          <CityItem
            city={city}
            selected={!!selected}
            onPress={() => {
              if (onPressItem) {
                onPressItem(city);
              }
            }}
          />
        </View>
      );
    })}
    </View>
  );
}

Section.propTypes = {
  section: PropTypes.instanceOf(Object).isRequired,
  selectedCity: PropTypes.instanceOf(CityModel),
  onPressItem: PropTypes.func.isRequired
};
