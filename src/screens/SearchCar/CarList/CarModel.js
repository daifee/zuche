import React from 'react';
import { View, Image } from 'react-native';
import { CarModel as styles } from './styles';
import Text from '../../../components/Text';
import List from '../../../components/List';


export default function CarModel() {
  return (
    <List.Item
      style={styles.container}
      header={(
        <View style={styles.left}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://imgcdn50.zuzuche.com/world/base/225/856/934/2/83e6cb848f5c99f7f8d543e5cf9a23f4.jpg!/fw/150/quality/100/format/png'
            }}
          />
        </View>
      )}
      body={(
        <View style={styles.right}>
          <Text style={styles.desc}>车型描述一</Text>
          <Text style={styles.desc}>车型描述二</Text>
          <Text style={styles.desc}>车型描述三</Text>
          <Text style={styles.orderNum}>24小时下单数量</Text>
        </View>
      )}
    />
  );
}
