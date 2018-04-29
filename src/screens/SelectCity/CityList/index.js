import React from 'react';
import { SectionList, FlatList } from 'react-native';
import CityItem from './CityItem';
import CityCollection from '../../../models/CityCollection';
import CityGroupCollection from '../../../models/CityGroupCollection';
// import { CityList as styles } from './styles';

const sourceData = [
  {
    title: '热门',
    list: [
      { id: '1', cnName: '墨尔本' },
      { id: '2', cnName: '悉尼' },
      { id: '3', cnName: '布里斯班' },
      { id: '4', cnName: '黄金海岸' },
      { id: '5', cnName: '阿德莱德' }
    ]
  },
  {
    title: 'A',
    list: [
      { id: '1', cnName: '墨尔本' },
      { id: '2', cnName: '悉尼' },
      { id: '3', cnName: '布里斯班' },
      { id: '4', cnName: '黄金海岸' },
      { id: '5', cnName: '阿德莱德' }
    ]
  },
  {
    title: 'B',
    list: [
      { id: '1', cnName: '墨尔本' },
      { id: '2', cnName: '悉尼' },
      { id: '3', cnName: '布里斯班' },
      { id: '4', cnName: '黄金海岸' },
      { id: '5', cnName: '阿德莱德' }
    ]
  },
  {
    title: 'C',
    list: [
      { id: '1', cnName: '墨尔本' },
      { id: '2', cnName: '悉尼' },
      { id: '3', cnName: '布里斯班' },
      { id: '4', cnName: '黄金海岸' },
      { id: '5', cnName: '阿德莱德' }
    ]
  }
];

let data = sourceData.map((cityGroup) => {
  return {
    ...cityGroup,
    list: new CityCollection(cityGroup.list)
  };
});

data = new CityGroupCollection(data);

export default class CityList extends React.Component {
  renderSection({ section }) {
    return (
      <FlatList
        key={section.title}
        data={section.data}
        numColumns={2}
        renderItem={({ item }) => {
          return (<CityItem
            city={item}
            selected={item.id === '0'}
          />);
        }}
        keyExtractor={city => `${city.id}`}
      />
    );
  }

  render() {
    const sections = data.map((cityGroup) => {
      return {
        title: cityGroup.title,
        data: cityGroup.list.toArray()
      };
    });

    return (
      <SectionList
        sections={sections}
        renderItem={this.renderSection}
        keyExtractor={(city) => {
          return `${city.id}`;
        }}
      />
    );
  }
}

