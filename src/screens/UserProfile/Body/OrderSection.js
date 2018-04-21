import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { OrderSection as styles } from './styles';

const items = [
  {
    key: 'a',
    title: '全部订单',
    leftIcon: { name: 'docs', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'b',
    title: '待评价',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'c',
    title: '售后/理赔',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  },
  {
    key: 'd',
    title: '带退款',
    leftIcon: { name: 'settings', type: 'simple-line-icon' },
    onPress: () => {
      // todo
    }
  }
];

export default function OrderSection() {
  return (
    <View style={styles.container}>
      {items.map(item => <ListItem {...item} />)}
    </View>
  );
}

