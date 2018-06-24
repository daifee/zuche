import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import LandmarkModel from '../../../models/Landmark.Model';
import CityModel from '../../../models/City.Model';
import City from './City';
import Landmark from './Landmark';
import DropoffSwitch from './DropoffSwitch';

import { Address as styles } from './styles';

const configMap = {
  pickup: {
    cityTitle: '取车城市',
    siteTitle: '取车地点',
  },
  dropoff: {
    cityTitle: '还车城市',
    siteTitle: '还车地点',
  },
};


function Address(props) {
  const {
    type, city, landmark, switchValue, navigation
  } = props;
  const config = configMap[type];

  return (
    <View style={styles.container}>
      <City
        city={city}
        title={config.cityTitle}
        onPress={() => {
          navigation.push('SelectCity', {
            type: type
          });
        }}
      />
      <Landmark
        landmark={landmark}
        title={config.siteTitle}
        onPress={() => {
          navigation.push('SelectCity', {
            type: type
          });
        }}
      />
      {
        typeof switchValue !== 'undefined'
        ? <DropoffSwitch value={switchValue} />
        : null
      }
    </View>
  );
}

Address.propTypes = {
  type: PropTypes.oneOf(['pickup', 'dropoff']).isRequired,
  city: PropTypes.instanceOf(CityModel),
  landmark: PropTypes.instanceOf(LandmarkModel),
  switchValue: PropTypes.bool,
  navigation: PropTypes.instanceOf(Object)
};


export default withNavigation(Address);
