/**
 * UserPrifle:
 * * Header
 * * OrderSection
 * * ProductSection
 * * ConvenienceSection
 * * OtherSection
 */
import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Body from './Body';
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
        <Body />
      </View>
    );
  }
}

export default UserProfile;
