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
import StructCollection from '../../models/Struct.Collection';

class SelectCity extends React.Component {
  static navigationOptions = () => ({
    title: '选择城市'
  });

  static propTypes = {
    categorizedCities: PropTypes.instanceOf(StructCollection).isRequired,
    selectedCategoryId: PropTypes.number.isRequired
  };

  componentDidMount() {
    dispatch({ type: 'categorizedCities/get' });
  }

  render() {
    const { categorizedCities, selectedCategoryId } = this.props;

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
            />
          </View>
          <View style={styles.cityListWrapper}>
            <CityList
              categorizedCities={categorizedCities}
              selectedCategoryId={selectedCategoryId}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(() => {
  const { categorizedCities, selectedCategoryId } = getState();
  return { categorizedCities, selectedCategoryId };
})(SelectCity);
