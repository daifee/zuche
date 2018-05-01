/**
 * 搜索城市
 * * Search
 * * ResultList
 */
import React from 'react';
import { View } from 'react-native';
import Header from '../../components/HeaderSearchBar';
import ResultList from './ResultList';

export default class SearchCity extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <View>
        <Header />
        <ResultList />
      </View>
    );
  }
}

