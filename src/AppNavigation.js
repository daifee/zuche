import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import HomePage from './screens/HomePage';
import Customer from './screens/Customer';
import UserProfile from './screens/UserProfile';
import SelectCity from './screens/SelectCity';
import SelectSite from './screens/SelectSite';
import SearchCar from './screens/SearchCar';
import SearchCity from './screens/SearchCity';
import SearchSite from './screens/SearchSite';
import Car from './screens/Car';
import Login from './screens/Login';
import { COLOR } from './styles';


const TabBarNavigation = createBottomTabNavigator({
  HomePage: {
    screen: HomePage
  },
  Customer: {
    screen: Customer,
  },
  UserProfile: {
    screen: UserProfile,
  },
}, {
  initialRouteName: 'HomePage',
  tabBarOptions: {
    activeTintColor: COLOR.primary,
    inactiveTintColor: COLOR.normal
  },
});

const AppNavigation = createStackNavigator({
  Root: {
    screen: TabBarNavigation,
    navigationOptions: {
      header: null
    }
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
  SearchCar: {
    screen: SearchCar,
  },
  Car: {
    screen: Car
  },
  Login: {
    screen: Login
  }
}, {
  navigationOptions: {
    // header: null
  },
  initialRouteName: 'Root',
  headerMode: 'screen'
});

export default AppNavigation;

