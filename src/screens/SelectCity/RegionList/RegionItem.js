import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { RegionItem as styles } from './styles';
import { ITEM_BG_COLOR } from '../../../styles';
import Region from '../../../models/Region';

export default function RegionItem(props) {
  const { region } = props;
  console.log(region);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor={ITEM_BG_COLOR}
        onPress={() => {}}
      >
        <Text style={styles.text}>{region.cnName}</Text>
      </TouchableHighlight>
    </View>
  );
}

RegionItem.propTypes = {
  region: PropTypes.instanceOf(Region).isRequired
};
