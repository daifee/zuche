import React from 'react';
import { View, Button } from 'react-native';
// import { Button } from 'react-native-elements';

import Address from './Address';
import Schedule from './Schedule';
import { index as indexStyle } from './styles';


export default function SearchSection() {
  return (
    <View style={indexStyle.container}>
      <Address type="pickup" />
      <Address type="dropoff" />
      <Schedule />

      <View style={indexStyle.buttonContainer}>
        <Button
          title="搜 索"
          color="#fff"
          onPress={() => {}}
          buttonStyle={indexStyle.button}
        />
      </View>
    </View>
  );
}

