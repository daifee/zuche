import React from 'react';
import { FlatList } from 'react-native';
import RegionItem from './RegionItem';

const data = [
  { id: 0, name: '热门' },
  { id: 1, name: '美国' },
  { id: 2, name: '澳大利亚' },
  { id: 3, name: '新西兰' },
  { id: 4, name: '泰国' },
  { id: 5, name: '德国' },
  { id: 6, name: '加拿大' },
  { id: 11, name: '美国' },
  { id: 21, name: '澳大利亚' },
  { id: 31, name: '新西兰' },
  { id: 41, name: '泰国' },
  { id: 51, name: '德国' },
  { id: 61, name: '加拿大' },
  { id: 12, name: '美国' },
  { id: 22, name: '澳大利亚' },
  { id: 32, name: '新西兰' },
  { id: 42, name: '泰国' },
  { id: 52, name: '德国' },
  { id: 62, name: '加拿大' }
];

export default function RegionList() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RegionItem region={item} />}
      keyExtractor={region => `${region.id}`}
    />
  );
}

