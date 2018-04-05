import React from 'react';
import { View, Text } from 'react-native';

class Car extends React.Component {
  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View>
        <Text>{this.displayName}</Text>
      </View>
    );
  }
}

export default Car;
