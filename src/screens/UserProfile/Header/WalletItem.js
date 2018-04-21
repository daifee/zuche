import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { WalletItem as styles } from './styles';

export default function WalletItem(props) {
  const { value, title } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // console.log(233);
      }}
    >
      <React.Fragment>
        <View>
          <Text style={styles.textValue}>{value}</Text>
        </View>
        <View>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
      </React.Fragment>
    </TouchableOpacity>
  );
}


WalletItem.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
