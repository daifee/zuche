import React from 'react';
import { View } from 'react-native';
import CarModel from './CarModel';
import CarProvider from './CarProvider';
import { Section as styles } from './styles';

export default function Section() {
  return (
    <View style={styles.container}>
      <CarModel />
      <CarProvider />
      <CarProvider />
      <CarProvider />
    </View>
  );
}
