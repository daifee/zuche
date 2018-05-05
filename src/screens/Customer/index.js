import React from 'react';
import { View, Text } from 'react-native';
import { Customer as styles } from './styles';
import Header from '../../components/Header';

class Customer extends React.Component {
  static navigationOptions = {
    header: Header
  };

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO</Text>
      </View>
    );
  }
}

export default Customer;
