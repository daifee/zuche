/**
 * 拆分组件：
 * * Search
 * * RegionList
 * * CityList
 */
import React from 'react';
import { View } from 'react-native';
import { SearchBarPlaceholder } from '../../components/SearchBar';
import RegionList from './RegionList';
import CityList from './CityList';
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
          <SearchBarPlaceholder />
        </View>
        <View style={styles.listWrapper}>
          <View style={styles.regionListWrapper}>
            <RegionList />
          </View>
          <View style={styles.cityListWrapper}>
            <CityList />
          </View>
        </View>
      </View>
    );
  }
}

export default SelectCity;
