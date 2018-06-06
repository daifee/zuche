import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SiteModel from '../../../models/Site.Model';
import CityModel from '../../../models/City.Model';
import City from './City';
import Site from './Site';
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


export default function Address(props) {
  const {
    type, city, site, switchValue,
  } = props;
  const config = configMap[type];

  return (
    <View style={styles.container}>
      <City city={city} title={config.cityTitle} />
      <Site site={site} title={config.siteTitle} />
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
  site: PropTypes.instanceOf(SiteModel),
  switchValue: PropTypes.bool
};

