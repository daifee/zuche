import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { RegionItem as styles } from './styles';
import { ITEM_BG_COLOR } from '../../../styles';
import Region from '../../../models/Region';

export default function RegionItem(props) {
  const { region, selected, ...rest } = props;

  return (
    selected
      ? (
        <View {...rest} style={[styles.container, styles.containerSelected]}>
          <View style={styles.sign} />
          <Text style={styles.text}>{region.cnName}</Text>
        </View>
      )
      : (
        <TouchableHighlight
          {...rest}
          style={styles.container}
          underlayColor={ITEM_BG_COLOR}
          onPress={() => {}}
        >
          <Text style={styles.text}>{region.cnName}</Text>
        </TouchableHighlight>
      )
  );
}

RegionItem.propTypes = {
  region: PropTypes.instanceOf(Region).isRequired,
  selected: PropTypes.bool.isRequired
};
