/**
 * SearchCar
 * * Header
 * * HotOptionList
 * * CarModelList
 * * CarList
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { HeaderSchedule as Header } from '../../components/Header';
import HotOptionList from './HotOptionList';
import SideMenu from './SideMenu';
import CarList from './CarList';
import { SearchCar as styles } from './styles';
import SearchParamsModel from '../../models/SearchParams.Model';
import { getState as globalGetState, dispatch as globalDispatch } from '../../store';
import { dispatch } from './store';


class SearchCar extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let searchParams = navigation.getParam('searchParams');

    if (searchParams && !(searchParams instanceof SearchParamsModel)) {
      searchParams = new SearchParamsModel(searchParams);
    }

    return {
      header: <Header searchParams={searchParams} />
    };
  };

  static propTypes = {
    searchParams: PropTypes.instanceOf(SearchParamsModel).isRequired,
    navigation: PropTypes.instanceOf(Object).isRequired
  };

  componentDidMount() {
    const { searchParams, navigation } = this.props;

    navigation.setParams({ searchParams });

    globalDispatch('searchParams/getCid')
      .then((cid) => {
        dispatch('carList/get', { cid });
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

export default connect((props) => {
  const { searchParams } = globalGetState();

  return {
    ...props,
    searchParams
  };
})(SearchCar);
