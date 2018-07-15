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
      {car.meal_list.map((meal) => {
        //
        const key = `${meal.book}`;
        return (<CarProvider key={key} meal={meal} />);
      })}
    </View>
  );
}

Section.propTypes = {
  car: PropTypes.instanceOf(CarModel).isRequired
};
