/**
 * SelectSite
 * * SearchBarPlaceholder
 * * SiteTypeList
 * * SiteList
 */
import React from 'react';
import { View } from 'react-native';
import SearchBarPlaceholder from '../../components/SearchBarPlaceholder';
import SiteTypeList from './SiteTypeList';
import SiteList from './SiteList';
import { SelectSite as styles } from './styles';

class SelectSite extends React.Component {
  static navigationOptions = () => ({
    title: '选择地点'
  });

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarWrapper}>
          <SearchBarPlaceholder />
        </View>
        <View style={styles.listWrapper}>
          <View style={styles.siteTypeListWrapper}>
            <SiteTypeList />
          </View>
          <View style={styles.siteListWrapper}>
            <SiteList />
          </View>
        </View>
      </View>
    );
  }
}

export default SelectSite;
