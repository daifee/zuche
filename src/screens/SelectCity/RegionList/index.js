import React from 'react';
import { FlatList, View } from 'react-native';
import RegionItem from './RegionItem';
import RegionCollection from '../../../models/RegionCollection';
import { RegionList as styles } from './styles';

const data = new RegionCollection([
  { id: '0', cnName: '热门' },
  { id: '1', cnName: '美国' },
  { id: '2', cnName: '澳大利亚' },
  { id: '3', cnName: '新西兰' },
  { id: '4', cnName: '泰国' },
  { id: '5', cnName: '德国' },
  { id: '6', cnName: '加拿大' },
  { id: '11', cnName: '美国' },
  { id: '21', cnName: '澳大利亚' },
  { id: '31', cnName: '新西兰' },
  { id: '41', cnName: '泰国' },
  { id: '51', cnName: '德国' },
  { id: '61', cnName: '加拿大' },
  { id: '12', cnName: '美国' },
  { id: '22', cnName: '澳大利亚' },
  { id: '32', cnName: '新西兰' },
  { id: '42', cnName: '泰国' },
  { id: '52', cnName: '德国' },
  { id: '62', cnName: '加拿大' }
]);

export default function RegionList() {
  return (
    <FlatList
      data={data.toArray()}
      renderItem={({ item, separators }) => {
        return (<RegionItem
          region={item}
          selected={item.id === '0'}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        />);
      }}
      keyExtractor={region => `${region.id}`}
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

