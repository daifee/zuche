import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FunctionSection as styles } from './styles';

const items = [
  {
    key: 'a',
    title: '常用信息',
    rightTitle: '修改常用驾驶人、地址、发票信息',
    onPress: () => {
      // todo
    }
  },
  {
    key: 'b',
    rightTitle: '收藏后等降价通知',
    title: '我的收藏',
    onPress: () => {
      // todo
    }
  },
  {
    key: 'c',
    title: '浏览记录',
    rightTitle: '保留一个月，随时可以回看',
    onPress: () => {
      // todo
    }
  }
];

export default function FunctionSection() {
  return (
    <View style={styles.container}>
      {items.map(item => <ListItem {...item} />)}
    </View>
  );
}

