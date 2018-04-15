import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { SearchButton as styles } from './styles';

export default function SearchButton(props) {
  return (
    <View style={styles.container}>
      <Button
        {...props}
        title="搜 索"
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
    </View>
  );
}

