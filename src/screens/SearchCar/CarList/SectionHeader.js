import React from 'react';
import { View } from 'react-native';
import { SectionHeader as styles } from './styles';
import Text from '../../../components/Text';

export default function SectionHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Jeep 大切诺基
          <Text style={styles.desc}>或同组车型</Text>
        </Text>
      </View>
    </View>
  );
}
