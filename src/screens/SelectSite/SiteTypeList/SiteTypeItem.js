import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { SiteTypeItem as styles } from './styles';
import { ITEM_BG_COLOR } from '../../../styles';

export default function SiteTypeItem(props) {
  const { selected, ...rest } = props;

  return (
    selected
      ? (
        <View {...rest} style={[styles.container, styles.containerSelected]}>
          <View style={styles.sign} />
          <Text style={styles.text}>SiteName</Text>
        </View>
      )
      : (
        <TouchableHighlight
          {...rest}
          style={styles.container}
          underlayColor={ITEM_BG_COLOR}
          onPress={() => {}}
        >
          <Text style={styles.text}>SiteName</Text>
        </TouchableHighlight>
      )
  );
}


SiteTypeItem.propTypes = {
  selected: PropTypes.bool.isRequired
};
