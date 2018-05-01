/**
 * SearchCar
 * * Header
 * * HotOptionList
 * * CarModelList
 * * CarList
 */
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import HotOptionList from './HotOptionList';
import { SearchCar as styles } from './styles';

export default class SearchCar extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Header />
        </View>
        <View style={styles.hotOptionListWrapper}>
          <HotOptionList />
        </View>
        <View style={styles.mainWrapper}>
          <View style={styles.carModelListWrapper}>
            <Text>CarModelList</Text>
          </View>
          <View style={styles.carListWrapper}>
            <Text>CarList</Text>
          </View>
        </View>
      </View>
    );
  }
}

