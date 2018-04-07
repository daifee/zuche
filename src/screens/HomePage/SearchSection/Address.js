import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';

import { Address as style } from './styles';

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
    <View style={style.container}>
      <City city={city} title={config.cityTitle} />
      <Site site={site} title={config.siteTitle} />
      {type === 'pickup' ? <SwitchDropoff value={switchValue} /> : null}
    </View>
  );
}

Address.propTypes = {
  type: PropTypes.oneOf(['pickup', 'dropoff']).isRequired,
  city: PropTypes.object,
  site: PropTypes.object,
  switchValue: PropTypes.bool,
};

function City(props) {
  const { title, city } = props;
  const empty = !city;
  const textStyle = [style.text];
  if (empty) textStyle.push(style.placeholderText);

  return (
    <ItemBox title={title} style={style.cityContainer}>
      <Text style={[textStyle]}>
        {empty ? '请选择' : city.name}
      </Text>
    </ItemBox>
  );
}

City.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.object,
};


function Site(props) {
  const { title, site } = props;
  const empty = !site;
  const textStyle = [style.text];
  if (empty) textStyle.push(style.placeholderText);

  return (
    <ItemBox title={title} style={style.siteContainer}>
      <Text style={[textStyle]}>
        {empty ? '请选择' : site.name}
      </Text>
    </ItemBox>
  );
}


Site.propTypes = {
  title: PropTypes.string.isRequired,
  site: PropTypes.object,
};

function SwitchDropoff(props) {
  const { value } = props;

  return (
    <ItemBox title="异地还车" childrenContainerStyle={style.switchDropoffChildrenContainerStyle}>
      <Switch
        value={value}
        style={style.switch}
      />
    </ItemBox>
  );
}

SwitchDropoff.defaultProps = {
  value: false,
};

SwitchDropoff.propTypes = {
  value: PropTypes.bool.isRequired,
};

