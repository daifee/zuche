import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './screens/HomePage';
import Customer from './screens/Customer';
import UserProfile from './screens/UserProfile';
import SelectCity from './screens/SelectCity';
import SelectSite from './screens/SelectSite';
import Search from './screens/Search';

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
      let iconName;
      if (routeName === 'HomePage') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  initialRouteName: 'HomePage',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
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

