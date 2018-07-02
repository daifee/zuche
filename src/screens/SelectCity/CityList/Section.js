import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CityItem from './CityItem';
import { Section as styles } from './styles';

export default function Section(props) {
  const { section, onPressItem } = props;

  return (
    <View style={styles.container}>{section.data.map((city) => {
      const key = `${city.id}`;
      return (
        <View key={key} style={styles.itemWrapper}>
          <CityItem
            city={city}
            selected={false}
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
  onPressItem: PropTypes.func.isRequired
};
