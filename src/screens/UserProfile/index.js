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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header from './Header';
import Body from './Body';
import { UserProfile as styles } from './styles';

class UserProfile extends React.Component {
  static navigationOptions = {
    title: '我的',
    tabBarIcon: ({ tintColor }) => {
      return <SimpleLineIcons name="user" size={22} color={tintColor} />;
    }
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
