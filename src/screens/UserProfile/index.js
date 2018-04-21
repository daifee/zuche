/**
 * UserPrifle:
 * * Header
 * * OrderSection
 * * ProductSection
 * * ConvenienceSection
 * * OtherSection
 */
import React from 'react';
import { ScrollView } from 'react-native';
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
      <ScrollView style={styles.contianer}>
        <Header />
        <Body />
      </ScrollView>
    );
  }
}

export default UserProfile;
