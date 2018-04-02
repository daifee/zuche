import React from 'react';
import { View, Text } from 'react-native';

class HomePage extends React.Component {
  componentDidMount() {
    console.log(this.displayName);
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
