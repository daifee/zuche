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
    categorizeCities: PropTypes.instanceOf(StructCollection).isRequired
  };

  componentDidMount() {
    dispatch({ type: 'categorizeCities/get' });
  }

  render() {
    const { categorizeCities } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.searchBarWrapper}>
          <SearchBarPlaceholder />
        </View>
        <View style={styles.listWrapper}>
          <View style={styles.regionListWrapper}>
            <SideMenu categories={categorizeCities} />
          </View>
          <View style={styles.cityListWrapper}>
            <CityList />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(() => {
  const { categorizeCities } = getState();
  return { categorizeCities };
})(SelectCity);
