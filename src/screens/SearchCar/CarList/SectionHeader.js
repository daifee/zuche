import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SectionHeader as styles } from './styles';
import Text from '../../../components/Text';
import CarModel from '../../../models/Car.Model';

export default function SectionHeader({ car }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          {car.car_name}
          <Text style={styles.desc}>
            {car.fixed ? '指定车型' : '或同组车型'}
          </Text>
        </Text>
      </View>
    </View>
  );
}

SectionHeader.propTypes = {
  car: PropTypes.instanceOf(CarModel).isRequired
};
