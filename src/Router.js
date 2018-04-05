import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

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
  headerMode: 'screen',
});

export default Stack;

