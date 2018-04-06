import React from 'react';
import { View, Text } from 'react-native';

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
        <Text>HomePage</Text>
      </View>
    );
  }
}

export default HomePage;
