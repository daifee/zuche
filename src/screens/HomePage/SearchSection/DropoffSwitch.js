import React from 'react';
import { Switch } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { DropoffSwitch as styles } from './styles';
import { dispatch as globalDispatch } from '../../../store';

export default function DropoffSwitch(props) {
  const { value } = props;

  return (
    <ItemBox title="异地还车" childrenContainerStyle={styles.container}>
      <Switch
        value={value}
        onValueChange={() => {
          globalDispatch('searchParams/setSameCity', value);
        }}
      />
    </ItemBox>
  );
}

DropoffSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
};

