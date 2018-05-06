import React from 'react';
import { View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { RightArrow as styles } from './styles';
import { TEXT_COLOR_SECONDARY, FONT_SIZE } from '../../styles';

export default function RightArrow() {
  return (
    <View style={[styles.container]}>
      <SimpleLineIcons
        name="arrow-right"
        color={TEXT_COLOR_SECONDARY}
        size={FONT_SIZE.xs}
      />
    </View>
  );
}

