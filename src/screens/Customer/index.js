import React from 'react';
import { View, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Customer as styles } from './styles';
import Button, { ButtonPrimary } from '../../components/Button';
import List from '../../components/List';
import CheckBox from '../../components/CheckBox';
import CheckButton from '../../components/CheckButton';
import SideMenu, { SideMenuItem } from '../../components/SideMenu';


class Customer extends React.Component {
  static navigationOptions = {
    title: '客服',
    tabBarIcon: ({ tintColor }) => {
      return <SimpleLineIcons name="earphones-alt" size={22} color={tintColor} />;
    }
  };

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.multipleLines}>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
          <View style={styles.box}><Text>test box</Text></View>
        </View>
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
          <CheckButton disable checked style={{ width: 100 }}>
            请选择
          </CheckButton>

          <SideMenu>
            <SideMenuItem>全部</SideMenuItem>
            <SideMenuItem selected>
              <Text>中国</Text>
              <Text>China</Text>
            </SideMenuItem>
            <SideMenuItem>德哥</SideMenuItem>
            <SideMenuItem>法国</SideMenuItem>
            <SideMenuItem>美利坚共和党</SideMenuItem>
          </SideMenu>
        </View>
      </View>
    );
  }
}

export default Customer;
