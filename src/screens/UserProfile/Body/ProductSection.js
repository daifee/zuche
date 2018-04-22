import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ProductSection as styles } from './styles';
import { ITEM_BG_COLOR_ACTIVE } from '../../../styles';

const items = [
  {
    key: 'a',
    title: '国际驾照',
    rightTitle: '限时免费',
    leftIcon: { name: 'docs', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'b',
    title: '门票玩乐',
    rightTitle: '5折起',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'c',
    title: '电话卡',
    rightTitle: '9元抢',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'd',
    title: '福利派',
    rightTitle: '海量福利',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'e',
    title: '白金信用卡申请',
    rightTitle: '海外消费返现8%',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  }
];

export default function ProductSection() {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <ListItem
          component={TouchableHighlight}
          underlayColor={ITEM_BG_COLOR_ACTIVE}
          {...item}
        />
        ))}
    </View>
  );
}

