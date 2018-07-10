/**
 * SearchCar
 * * Header
 * * HotOptionList
 * * CarModelList
 * * CarList
 */
import React from 'react';
import { View } from 'react-native';
import { HeaderSchedule as Header } from '../../components/Header';
import HotOptionList from './HotOptionList';
import SideMenu from './SideMenu';
import CarList from './CarList';
import { SearchCar as styles } from './styles';
import SearchParamsModel from '../../models/SearchParams.Model';

export default class SearchCar extends React.Component {
  static navigationOptions = {
    header: Header
  };

  componentDidMount() {
    SearchParamsModel.getId()
      .then((id) => {
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <CarList />
          </View>
        </View>
      </View>
    );
  }
}

