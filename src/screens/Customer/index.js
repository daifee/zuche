import React from 'react';
import { View, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Customer as styles } from './styles';
import Button, { ButtonPrimary } from '../../components/Button';
import List from '../../components/List';
import CheckBox from '../../components/CheckBox';
// import CheckButton from '../../components/CheckButton';
// import SideMenu, { SideMenuItem } from '../../components/SideMenu';
import { Toast, AnimatedToastContainer } from '../../components/AnimatedToast';

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
        <Toast type="loading" content="加载中..." />

        <Toast type="error" content="失败" />
        <Toast type="warning" content="警告" />
        <Toast type="info" content="信息" />
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
        <AnimatedToastContainer type="success" content="成功" />
      </View>
    );
  }
}

export default Customer;
