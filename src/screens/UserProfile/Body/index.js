import React from 'react';
import { View } from 'react-native';
import OrderSection from './OrderSection';
import ProductSection from './ProductSection';
import FunctionSection from './FunctionSection';
import OtherSection from './OtherSection';
import { Body as styles } from './styles';

export default function Body() {
  return (
    <View style={styles.contianer}>
      <OrderSection />
      <ProductSection />
      <FunctionSection />
      <OtherSection />
    </View>
  );
}

