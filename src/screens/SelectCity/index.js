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
  static navigationOptions = ({ navigation }) => {
    const type = navigation.getParam('type');
    return {
      title: type === 'pickup' ? '选择取车城市' : '选择还车城市'
    };
  };

  static propTypes = {
    categorizedCities: PropTypes.instanceOf(StructCollection).isRequired,
    selectedCategoryId: PropTypes.number.isRequired,
    selectedCity: PropTypes.instanceOf(CityModel),
    navigation: PropTypes.instanceOf(Object).isRequired,
    type: PropTypes.oneOf(['pickup', 'dropoff']).isRequired
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
    const { selectedCity, navigation, type } = this.props;

    if (!selectedCity || selectedCity.id !== city.id) {
      if (type === 'pickup') {
        globalDispatch('searchParams/setPickupCity', city);
      } else {
        globalDispatch('searchParams/setDropoffCity', city);
      }
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
  const { navigation } = props;
  const type = navigation.getParam('type');
  const { categorizedCities, selectedCategoryId } = getState();
  const { searchParams } = globalGetState();
  let selectedCity;
  if (type === 'pickup') {
    selectedCity = searchParams.pickupCity;
  } else {
    selectedCity = searchParams.dropoffCity;
  }

  return {
    ...props, type, categorizedCities, selectedCategoryId, selectedCity
  };
})(SelectCity);
