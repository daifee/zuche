import React from 'react';
import { Switch } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { DropoffSwitch as styles } from './styles';

export default function DropoffSwitch(props) {
  const { value } = props;

  return (
    <ItemBox title="异地还车" childrenContainerStyle={styles.container}>
      <Switch value={value} />
    </ItemBox>
  );
}

DropoffSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
};

