import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { OtherSection as styles } from './styles';

const items = [
  {
    key: 'a',
    title: '设置',
    rightTitle: '个人信息、安全等设置',
    onPress: () => {
      // todo
    }
  },
  {
    key: 'b',
    title: '语言',
    rightTitle: '简体中文',
    onPress: () => {
      // todo
    }
  }
];

export default function OtherSection() {
  return (
    <View style={styles.container}>
      {items.map(item => <ListItem {...item} />)}
    </View>
  );
}

