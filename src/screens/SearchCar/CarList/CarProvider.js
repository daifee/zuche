import React from 'react';
import { View, Image } from 'react-native';
import { CarProvider as styles } from './styles';
import Text from '../../../components/Text';
import List from '../../../components/List';

export default function CarProvider() {
  return (
    <List.Item
      header={(
        <View style={styles.left}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://imgcdn5.zuzuche.com/cdn1/public/dealer_v5/alamo_id_29/100x50.png'
            }}
          />
          <Text style={styles.brandDesc}>品牌提示</Text>
        </View>
      )}
      body={(
        <View style={styles.center}>
          <Text style={styles.gradeWrapper}>
            <Text style={styles.grade}>8.1评分</Text>
            <Text style={styles.gradeTimes}>（1千+评分）</Text>
          </Text>
          <Text style={styles.traffic}>介绍取还车交通</Text>
          <Text style={styles.bookingTips}>下单提示</Text>

          <Text style={styles.service}>其他服务</Text>
          <Text style={styles.service}>其他服务</Text>
        </View>
      )}
      footer={(
        <View style={styles.right}>
          <Text style={styles.priceWrapper}>
            ￥
            <Text style={styles.price}>135</Text>
            /天
          </Text>
          <Text style={styles.privilege}>优惠提示1</Text>
          <Text style={styles.privilege}>优惠提示2</Text>
        </View>
      )}
    />
  );
}
