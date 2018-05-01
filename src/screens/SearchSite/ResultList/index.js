import React from 'react';
import { FlatList, View } from 'react-native';
import Item from './ResultItem';
import { ResultList as styles } from './styles';

export default function ResultList() {
  return (
    <FlatList
      data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]}
      renderItem={() => {
        return <Item />;
      }}
      keyExtractor={item => `${item.key}`}
      ItemSeparatorComponent={({ highlighted }) => {
        const style = [styles.separator];
        if (highlighted) {
          style.push(styles.separatorActive);
        }

        return <View style={style} />;
      }}
    />
  );
}

