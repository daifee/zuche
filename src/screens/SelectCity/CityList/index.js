import React from 'react';
import { SectionList, FlatList, View, Text } from 'react-native';
import CityItem from './CityItem';
import CityCollection from '../../../models/City.Collection';
import { CityList as styles } from './styles';

const data = new CityCollection([
  {
    id: '1', cnName: '墨尔本', hot: true, letter: 'A'
  },
  { id: '2', cnName: '悉尼', letter: 'A' },
  { id: '3', cnName: '布里斯班', letter: 'B' },
  { id: '4', cnName: '黄金海岸', letter: 'B' },
  { id: '5', cnName: '阿德莱德', letter: 'B' },
  { id: '11', cnName: '墨尔本', letter: 'B' },
  { id: '12', cnName: '悉尼', letter: 'B' },
  { id: '13', cnName: '布里斯班', letter: 'B' },
  { id: '14', cnName: '黄金海岸', letter: 'A' },
  { id: '15', cnName: '阿德莱德', letter: 'D' },
  { id: '21', cnName: '墨尔本', letter: 'D' },
  { id: '22', cnName: '悉尼', letter: 'D' },
  { id: '23', cnName: '布里斯班', letter: 'D' },
  { id: '24', cnName: '黄金海岸', letter: 'D' },
  { id: '25', cnName: '阿德莱德', letter: 'D' },
  { id: '31', cnName: '墨尔本', letter: 'A' },
  { id: '32', cnName: '悉尼', letter: 'F' },
  { id: '33', cnName: '布里斯班', letter: 'F' },
  { id: '34', cnName: '黄金海岸', letter: 'F' },
  { id: '35', cnName: '阿德莱德', letter: 'F' },
  { id: '41', cnName: '墨尔本', letter: 'F' },
  { id: '42', cnName: '悉尼', letter: 'A' },
  { id: '43', cnName: '布里斯班', letter: 'U' },
  { id: '44', cnName: '黄金海岸', letter: 'U' },
  { id: '45', cnName: '阿德莱德', letter: 'U' },
  { id: '51', cnName: '墨尔本', letter: 'U' },
  { id: '52', cnName: '悉尼', letter: 'U' },
  { id: '53', cnName: '布里斯班', letter: 'U' },
  {
    id: '54', cnName: '黄金海岸', hot: true, letter: 'A'
  },
  {
    id: '55', cnName: '阿德莱德', hot: true, letter: 'I'
  },
  {
    id: '61', cnName: '墨尔本', hot: true, letter: 'I'
  },
  {
    id: '62', cnName: '悉尼', hot: true, letter: 'I'
  },
  {
    id: '63', cnName: '布里斯班', hot: true, letter: 'I'
  },
  {
    id: '64', cnName: '黄金海岸', hot: true, letter: 'I'
  },
  {
    id: '65', cnName: '阿德莱德', hot: true, letter: 'A'
  }
]);


export default class CityList extends React.Component {
  renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text>{section.title}</Text>
      </View>
    );
  }

  renderSection({ section }) {
    return (
      <FlatList
        style={styles.sectionContainer}
        columnWrapperStyle={styles.columnWrapper}
        key={section.title}
        data={section.flatListData}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemWrapper}>
              <CityItem
                city={item}
                selected={item.id === '1'}
              />
            </View>
          );
        }}
        keyExtractor={city => `${city.id}`}
      />
    );
  }

  render() {
    const sections = data.groupForMultipleColumnsSectionList();

    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderSection}
        keyExtractor={(item) => {
          return `${item.key}`;
        }}
        stickySectionHeadersEnabled
      />
    );
  }
}

