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
import SearchCity from './screens/SearchCity';
import SearchSite from './screens/SearchSite';
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
  initialRouteName: 'Customer',
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
  SearchCity: {
    screen: SearchCity
  },
  SelectSite: {
    screen: SelectSite,
  },
  SearchSite: {
    screen: SearchSite
  },
  Search: {
    screen: Search,
  }
}, {
  initialRouteName: 'SearchSite',
  headerMode: 'screen',
});

export default Stack;

