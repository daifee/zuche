import React from 'react';
import { View, Text } from 'react-native';
// import SectionHeader from './SectionHeader';
// import CarModel from './CarModel';
// import CarProvider from './CarProvider';
import { Section as styles } from './styles';

export default function Section() {
  return (
    <View style={styles.container}>
      <Text>section content</Text>
    </View>
  );
}
