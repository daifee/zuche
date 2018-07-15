import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { CarModel as styles } from './styles';
import Text from '../../../components/Text';
import List from '../../../components/List';
import CarModel from '../../../models/Car.Model';


export default function CarComponent({ car }) {
  return (
    <List.Item
      style={styles.container}
      header={(
        <View style={styles.left}>
          <Image
            style={styles.image}
            source={{
              uri: car.car_image
            }}
          />
        </View>
      )}
      body={(
        <View style={styles.right}>
          {
            car.seat ? (
              <Text style={styles.desc}>{car.seat}座/自动挡/{car.kind}</Text>
            ) : null
          }
          {
            car.reference ? (
              <Text style={styles.desc}>{car.reference}</Text>
            ) : null
          }
          {
            car.description ? (
              <Text style={styles.desc}>{car.description}</Text>
            ) : null
          }
          {
            car.feed ? (
              <Text style={styles.orderNum}>{car.feed.content}</Text>
            ) : null
          }
        </View>
      )}
    />
  );
}

CarComponent.propTypes = {
  car: PropTypes.instanceOf(CarModel).isRequired
};
