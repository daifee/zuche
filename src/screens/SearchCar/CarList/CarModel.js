import React from 'react';
import { TouchableHighlight, View, Image } from 'react-native';
import { CarModel as styles } from './styles';
import Text from '../../../components/Text';


export default function CarModel() {
  return (
    <TouchableHighlight
      style={styles.container}
    >
      <React.Fragment>
        <View style={styles.left}>
          <Image style={styles.image} />
        </View>
        <View style={styles.right}>
          <Text style={styles.desc}>车型描述一</Text>
          <Text style={styles.desc}>车型描述二</Text>
          <Text style={styles.desc}>车型描述三</Text>
          <Text style={styles.orderNum}>24小时下单数量</Text>
        </View>
      </React.Fragment>
    </TouchableHighlight>
  );
}
