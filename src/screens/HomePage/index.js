import React from 'react';
import { View, Text } from 'react-native';
import Banner from './Banner';


class HomePage extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View>
        <Banner node="string" />
        <Text>HomePage</Text>
      </View>
    );
  }
}

export default HomePage;
