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


class SearchCar extends React.Component {
  static navigationOptions = {
    header: Header
  };

  static propTypes = {
    searchParams: PropTypes.instanceOf(SearchParamsModel).isRequired
  };

  componentDidMount() {
    const { searchParams } = this.props;

    SearchParamsModel.getCid(searchParams)
      .then((cid) => {
        globalDispatch('searchParams/setCid', cid);
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

export default connect(() => {
  const { searchParams } = globalGetState();
  return {
    searchParams
  };
})(SearchCar);
