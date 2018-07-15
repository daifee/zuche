import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CarComponent from './CarModel';
import CarProvider from './CarProvider';
import { Section as styles } from './styles';
import CarModel from '../../../models/Car.Model';

export default function Section({ car }) {
  return (
    <View style={styles.container}>
      <CarComponent key="car" car={car} />
      {car.shopList.map((shop) => {
        //
        const key = `${shop.book}`;
        return (<CarProvider key={key} />);
      })}
    </View>
  );
}

Section.propTypes = {
  car: PropTypes.instanceOf(CarModel).isRequired
};
