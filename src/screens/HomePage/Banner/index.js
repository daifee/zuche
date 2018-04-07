import React from 'react';
import { View, Image } from 'react-native';
import bannerImage from './banner.jpg';
import { index as indexStyle } from './styles';

export default function Banner() {
  return (
    <View style={indexStyle.container}>
      <Image style={indexStyle.image} source={bannerImage} />
    </View>
  );
}

