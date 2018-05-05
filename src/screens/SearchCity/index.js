/**
 * 搜索城市
 * * Search
 * * ResultList
 */
import React from 'react';
import { View } from 'react-native';
import { HeaderSearchBar as Header } from '../../components/Header';
import ResultList from './ResultList';

export default class SearchCity extends React.Component {
  static navigationOptions = {
    header: Header
  };

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <View>
        <ResultList />
      </View>
    );
  }
}

