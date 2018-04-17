import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { Avatar } from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { User as styles } from './styles';
import avatarImage from './avatar.jpg';
import { TEXT_COLOR_PRIMARY } from '../../../styles';
import px from '../../../utils/px';

export default function User() {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Avatar
          rounded
          medium
          style={styles.image}
          source={avatarImage}
        />
      </TouchableHighlight>

      <TouchableHighlight style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.usernameText}>username</Text>
          </View>
          <View style={styles.vipContainer}>
            <SimpleLineIcons
              name="flag"
              size={px(24)}
              color={TEXT_COLOR_PRIMARY}
            />
            <Text style={styles.vipText}>会员</Text>
            <SimpleLineIcons
              name="arrow-right"
              size={px(24)}
              color={TEXT_COLOR_PRIMARY}
            />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

