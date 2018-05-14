import React from 'react';
import { View, Image } from 'react-native';
import { CarProvider as styles } from './styles';
import Text from '../../../components/Text';


export default function CarProvider() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.logo} />
        <Text style={styles.brandDesc}>品牌提示</Text>
      </View>
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
      <View style={styles.right}>
        <Text style={styles.priceWrapper}>
          ￥
          <Text style={styles.price}>135</Text>
          /天
        </Text>
        <Text style={styles.privilege}>优惠提示1</Text>
        <Text style={styles.privilege}>优惠提示2</Text>
      </View>
    </View>
  );
}
