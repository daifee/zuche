import React from 'react';
import { View, Text } from 'react-native';
import Address from './Address';
import Schedule from './Schedule';
import SearchButton from './SearchButton';
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

      <SearchButton />
    </View>
  );
}

