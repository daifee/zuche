import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CityItem from './CityItem';

export default function Section(props) {
  const { section } = props;

  return (
    <View>{section.data.map((city) => {
      const key = `${city.id}`;
      return (<CityItem key={key} city={city} selected={false} />);
    })}
    </View>
  );
}

Section.propTypes = {
  section: PropTypes.instanceOf(Object).isRequired
};
