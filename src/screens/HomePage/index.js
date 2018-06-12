import { connect } from 'react-redux';
import React from 'react';
import { View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Banner from './Banner';
import SearchSection from './SearchSection';


class HomePage extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ tintColor }) => {
      return <SimpleLineIcons name="home" size={22} color={tintColor} />;
    }
  };

  render() {
    return (
      <View>
        <Banner node="string" />
        <SearchSection />
      </View>
    );
  }
}

const HomePageConnector = connect((state, props) => {
  console.log(state, props);
  return { ...state, props };
}, undefined, undefined, {
  storeKey: 'store'
})(HomePage);

export default HomePageConnector;
