/**
 * UserPrifle:
 * * Header
 * * OrderSection
 * * ProductSection
 * * ConvenienceSection
 * * OtherSection
 */
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import { UserProfile as styles } from './styles';

class UserProfile extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View style={styles.contianer}>
        <Header />
        <View style={styles.other}>
          <Text>UserProfile</Text>
        </View>
      </View>
    );
  }
}

export default UserProfile;
