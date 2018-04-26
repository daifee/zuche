import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { RegionItem as styles } from './styles';
import { ITEM_BG_COLOR } from '../../../styles';

export default function RegionItem(props) {
  const { region } = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor={ITEM_BG_COLOR}
        onPress={() => {}}
      >
        <Text style={styles.text}>{region.name}</Text>
      </TouchableHighlight>
    </View>
  );
}

RegionItem.propTypes = {
  region: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};
