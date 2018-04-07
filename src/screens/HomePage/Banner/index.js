import * as React from 'react';
import { View, Image } from 'react-native';
import bannerImage from './banner.jpg';
import { Banner as BannerStyle } from './styles';


export default function Banner() {
  return (
    <View style={BannerStyle.container}>
      <Image style={BannerStyle.image} source={bannerImage} />
    </View>
  );
}
