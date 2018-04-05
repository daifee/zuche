import React from 'react';
import { View, Text } from 'react-native';

class UserProfile extends React.Component {
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

export default UserProfile;
