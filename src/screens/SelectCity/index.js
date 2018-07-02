/**
 * 拆分组件：
 * * Search
 * * RegionList
 * * CityList
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SearchBarPlaceholder } from '../../components/SearchBar';
import SideMenu from './SideMenu';
import CityList from './CityList';
import { SelectCity as styles } from './styles';

import { dispatch, getState } from './store';
import { getState as globalGetState, dispatch as globalDispatch } from '../../store';
import StructCollection from '../../models/Struct.Collection';
import CityModel from '../../models/City.Model';


class SelectCity extends React.Component {
  static navigationOptions = () => ({
    title: '选择城市'
  });

  static propTypes = {
    categorizedCities: PropTypes.instanceOf(StructCollection).isRequired,
    selectedCategoryId: PropTypes.number.isRequired,
    selectedCity: PropTypes.instanceOf(CityModel),
    navigation: PropTypes.instanceOf(Object).isRequired
  };

  componentDidMount() {
    dispatch({ type: 'categorizedCities/get' });
  }

  onPressMenuItem = (category) => {
    const { selectedCategoryId } = this.props;
    if (category.id !== selectedCategoryId) {
      dispatch('selectedCategoryId/set', category.id);
    }
  };

  onPressItem = (city) => {
    const { selectedCity, navigation } = this.props;

    if (!selectedCity || selectedCity.id !== city.id) {
      globalDispatch('searchParams/setPickupCity', city);
    }

    navigation.goBack();
  };

  render() {
    const { categorizedCities, selectedCategoryId, selectedCity } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.searchBarWrapper}>
          <SearchBarPlaceholder />
        </View>
        <View style={styles.listWrapper}>
          <View style={styles.regionListWrapper}>
            <SideMenu
              categories={categorizedCities}
              selectedCategoryId={selectedCategoryId}
              onPressItem={this.onPressMenuItem}
            />
          </View>
          <View style={styles.cityListWrapper}>
            <CityList
              categorizedCities={categorizedCities}
              selectedCategoryId={selectedCategoryId}
              selectedCity={selectedCity}
              onPressItem={this.onPressItem}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect((state, props) => {
  const { categorizedCities, selectedCategoryId } = getState();
  const { searchParams } = globalGetState();
  const selectedCity = searchParams.pickupCity;

  return {
    ...props, categorizedCities, selectedCategoryId, selectedCity
  };
})(SelectCity);
