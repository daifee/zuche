import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import SearchBar from '../SearchBar';
import { HeaderSearchBar as styles } from './styles';

export default function HeaderSearchBar() {
  return (
    <View style={styles.container}>
      <SearchBar containerStyle={styles.searchBar} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>取消</Text>
      </TouchableOpacity>
    </View>
  );
}
