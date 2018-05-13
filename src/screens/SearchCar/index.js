/**
 * SearchCar
 * * Header
 * * HotOptionList
 * * CarModelList
 * * CarList
 */
import React from 'react';
import { View, Text } from 'react-native';
import { HeaderSchedule as Header } from '../../components/Header';
import HotOptionList from './HotOptionList';
import SideMenu from './SideMenu';
import { SearchCar as styles } from './styles';

export default class SearchCar extends React.Component {
  static navigationOptions = {
    header: Header
  };

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hotOptionListWrapper}>
          <HotOptionList />
        </View>
        <View style={styles.mainWrapper}>
          <View style={styles.sideMenuWrapper}>
            <SideMenu />
          </View>
          <View style={styles.carListWrapper}>
            <Text>CarList</Text>
          </View>
        </View>
      </View>
    );
  }
}

