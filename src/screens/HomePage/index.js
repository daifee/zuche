import React from 'react';
import { View } from 'react-native';
import Banner from './Banner';
import SearchSection from './SearchSection';


class HomePage extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Banner node="string" />
        <SearchSection />
      </View>
    );
  }
}

export default HomePage;
