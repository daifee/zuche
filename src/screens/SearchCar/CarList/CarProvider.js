import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { CarProvider as styles } from './styles';
import Text from '../../../components/Text';
import List from '../../../components/List';
import CarMealModel from '../../../models/CarMeal.Model';


export default function CarProvider({ meal }) {
  const pickupShop = meal.pickupShop || {};

  return (
    <List.Item
      header={(
        <View style={styles.left}>
          <Image
            style={styles.logo}
            source={{
              uri: pickupShop.logo
            }}
          />
          <Text style={styles.brandDesc}>品牌提示</Text>
        </View>
      )}
      body={(
        <View style={styles.center}>
          <Text style={styles.gradeWrapper}>
            <Text style={styles.grade}>{pickupShop.score}评分</Text>
            <Text style={styles.gradeTimes}>（{pickupShop.survey}）</Text>
          </Text>
          <Text style={styles.traffic}>{pickupShop.shopAddress}</Text>
          <Text style={styles.bookingTips}>{meal.supplier_policy}</Text>

          {meal.feature.map((item, index) => {
            const key = `${index}`;
            return (
              <Text key={key} style={styles.service}>{item.name}</Text>
            );
          })}
        </View>
      )}
      footer={(
        <View style={styles.right}>
          <Text style={styles.priceWrapper}>
            {meal.lang_currency}
            <Text style={styles.price}>{meal.unit_price}</Text>
            /天
          </Text>
          <Text style={styles.privilege}>优惠提示1</Text>
          <Text style={styles.privilege}>优惠提示2</Text>
        </View>
      )}
    />
  );
}

CarProvider.propTypes = {
  meal: PropTypes.instanceOf(CarMealModel).isRequired
};
