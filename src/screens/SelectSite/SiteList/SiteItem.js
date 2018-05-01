import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { SiteItem as styles } from './styles';
import { ITEM_BG_COLOR_ACTIVE } from '../../../styles';

export default function SiteItem() {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {}}
      underlayColor={ITEM_BG_COLOR_ACTIVE}
    >
      <View style={styles.rightWrapper}>
        <Text style={styles.title}>Luo American Inc</Text>
        <Text style={styles.secondTitle}>Los Angeles</Text>
      </View>
    </TouchableHighlight>
  );
}

