import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Text from '../Text';
import { Toast as styles } from './styles';
import { COLOR } from '../../styles';
// import px from '../../utils/px';

const mapIcons = {
  loading: (<ActivityIndicator size="small" color="#ffffff" />),
  success: (<SimpleLineIcons name="check" size={18} color={COLOR.success} />),
  error: (<SimpleLineIcons name="close" size={18} color={COLOR.error} />),
  warning: (<SimpleLineIcons name="exclamation" size={18} color={COLOR.warning} />),
  info: (<SimpleLineIcons name="info" size={18} color={COLOR.info} />)
};

export default function Toast(props) {
  const { type, content } = props;

  const icon = mapIcons[type];

  return (
    <View style={styles.container}>
      <View style={styles.right}>
        {icon}
      </View>
      <View style={styles.left}>
        <Text
          style={styles.content}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {content}
        </Text>
      </View>
    </View>
  );
}

Toast.propTypes = {
  type: PropTypes.oneOf([
    'loading',
    'success',
    'error',
    'info',
    'warning'
  ]).isRequired,
  content: PropTypes.string.isRequired
};
