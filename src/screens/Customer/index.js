import React from 'react';
import { View } from 'react-native';
import { Customer as styles } from './styles';
import { HeaderSearchBar as Header } from '../../components/Header';
import Button, { ButtonPrimary } from '../../components/Button';

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
        <Button>我是按钮</Button>
        <ButtonPrimary>我是按钮</ButtonPrimary>
      </View>
    );
  }
}

export default Customer;
