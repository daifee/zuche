import React from 'react';
import { View, Text } from 'react-native';
import { Customer as styles } from './styles';

class Customer extends React.Component {
  static navigationOptions = {
    header: null
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
