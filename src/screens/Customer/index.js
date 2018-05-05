import React from 'react';
import { View, Text } from 'react-native';
import { Customer as styles } from './styles';
import { HeaderSearchBar as Header } from '../../components/Header';
import Button, { ButtonPrimary } from '../../components/Button';
import List from '../../components/List';

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
        <View><Text>hhhh</Text></View>
        <List>
          <List.Item
            header="header"
            body="body"
            footer="footer"
          />
          <List.Item
            header="header"
            body="body"
            footer="footer"
          />
        </List>
      </View>
    );
  }
}

export default Customer;
