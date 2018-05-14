import React from 'react';
import { View } from 'react-native';
import { CarModelSectionHeader as styles } from './styles';
import Text from '../../../components/Text';

export default function CarModelSectionHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jeep 大切诺基</Text>
      <Text style={styles.desc}>或同组车型</Text>
    </View>
  );
}
