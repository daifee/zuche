import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { SearchBar as styles } from './styles';
import SearchBarComponent from '../../../components/SearchBar';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <SearchBarComponent
        placeholder="支持输入中文/拼音/英文"
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.input}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          // console.log('feedback');
        }}
      >
        <View style={styles.touchableContainer} />
      </TouchableWithoutFeedback>
    </View>
  );
}
