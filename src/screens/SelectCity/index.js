/**
 * 拆分组件：
 * * Search
 * * RegionList
 * * CityList
 */
import React from 'react';
import { View } from 'react-native';
import SearchBar from './SearchBar';
import RegionList from './RegionList';
import { SelectCity as styles } from './styles';

class SelectCity extends React.Component {
  static navigationOptions = () => ({
    title: '选择城市'
  });

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarWrapper}>
          <SearchBar />
        </View>
        <View style={styles.listWrapper}>
          <RegionList />
          <RegionList />
        </View>
      </View>
    );
  }
}

export default SelectCity;
