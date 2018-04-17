import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomePage from './screens/HomePage';
import Customer from './screens/Customer';
import UserProfile from './screens/UserProfile';
import SelectCity from './screens/SelectCity';
import SelectSite from './screens/SelectSite';
import Search from './screens/Search';
import { COLOR } from './styles';

const tabBarIconMap = {
  HomePage: 'home',
  Customer: 'earphones-alt',
  UserProfile: 'user'
};

const Root = TabNavigator({
  HomePage: {
    screen: HomePage,
  },
  Customer: {
    screen: Customer,
  },
  UserProfile: {
    screen: UserProfile,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      const iconName = tabBarIconMap[routeName] || 'settings';

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <SimpleLineIcons name={iconName} size={25} color={tintColor} />;
    },
  }),
  initialRouteName: 'UserProfile',
  tabBarOptions: {
    activeTintColor: COLOR.primary,
    inactiveTintColor: COLOR.normal,
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});


const Stack = StackNavigator({
  Root: {
    screen: Root,
  },
  SelectCity: {
    screen: SelectCity,
  },
  SelectSite: {
    screen: SelectSite,
  },
  Search: {
    screen: Search,
  },
}, {
  initialRouteName: 'Root',
  headerMode: 'screen',
});

export default Stack;

