import React from 'react';
import { View } from 'react-native';
import { SearchBar as SearchBarComponent } from 'react-native-elements';
import { SearchBar as styles } from './styles';

export default function SearchBar() {
  return (
    <View>
      <SearchBarComponent
        lightTheme
        placeholder="支持输入中文/拼音/英文"
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.input}
      />
    </View>
  );
}
