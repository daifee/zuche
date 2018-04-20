import React from 'react';
import {
  View,
  TouchableHighlight
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { TEXT_COLOR_PRIMARY } from '../../../styles';
import px from '../../../utils/px';
import { Notification as styles } from './styles';


export default function Notification() {
  return (
    <TouchableHighlight style={styles.container}>
      <View>
        <SimpleLineIcons
          name="bell"
          size={px(44)}
          color={TEXT_COLOR_PRIMARY}
          style={styles.icon}
        />
        <View style={styles.redDot} />
      </View>
    </TouchableHighlight>
  );
}
