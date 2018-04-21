import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { TEXT_COLOR_PRIMARY } from '../../../styles';
import px from '../../../utils/px';
import { Notification as styles } from './styles';


export default function Notification() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // todo
      }}
    >
      <React.Fragment>
        <SimpleLineIcons
          name="bell"
          size={px(44)}
          color={TEXT_COLOR_PRIMARY}
          style={styles.icon}
        />
        <View style={styles.redDot} />
      </React.Fragment>
    </TouchableOpacity>
  );
}
