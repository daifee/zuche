import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ResultItem as styles } from './styles';
import { ITEM_BG_COLOR_ACTIVE } from '../../../styles';

export default function ResultItem() {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {}}
      underlayColor={ITEM_BG_COLOR_ACTIVE}
    >
      <React.Fragment>
        <View style={styles.leftWrapper}>
          <SimpleLineIcons site={20} name="settings" />
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>Luo American Inc</Text>
          <Text style={styles.secondTitle}>Los Angeles</Text>
        </View>
      </React.Fragment>
    </TouchableHighlight>
  );
}

