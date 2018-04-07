import * as React from 'react';
import { View, Image } from 'react-native';
import bannerImage from './banner.jpg';
import { Banner as styles } from './styles';


export default function Banner() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bannerImage} />
    </View>
  );
}
