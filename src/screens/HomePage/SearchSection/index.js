import React from 'react';
import { View, Text, Button } from 'react-native';
// import { Button } from 'react-native-elements';
import Address from './Address';
import Schedule from './Schedule';
import { SearchSection as styles } from './styles';


export default function SearchSection() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>国际租车</Text>
      </View>
      <Address
        type="pickup"
        switchValue={false}
      />
      <Address type="dropoff" />
      <Schedule />

      <View style={styles.buttonContainer}>
        <Button
          title="搜 索"
          color="#fff"
          onPress={() => {}}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}

