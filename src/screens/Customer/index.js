import React from 'react';
import { View, Text } from 'react-native';
import { Customer as styles } from './styles';
import { HeaderSearchBar as Header } from '../../components/Header';
import Button, { ButtonPrimary } from '../../components/Button';
import List from '../../components/List';
import CheckBox from '../../components/CheckBox';
import CheckButton from '../../components/CheckButton';

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
            rightArrow
          />
          <List.Item
            header={<CheckBox disable />}
            body={<CheckBox checked disable />}
            footer={<CheckBox />}
          />
        </List>
        <View><Text>hhhh</Text></View>
        <View style={{
          // flex: 1,
          width: '100%',
          backgroundColor: '#ffffff',
          paddingVertical: 20
        }}
        >
          <CheckButton disable checked style={{ width: 100 }}>请选择</CheckButton>
        </View>
      </View>
    );
  }
}

export default Customer;
