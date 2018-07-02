import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import LandmarkModel from '../../../models/Landmark.Model';
import { Landmark as styles } from './styles';

export default function Landmark(props) {
  const { title, landmark, ...rest } = props;
  const empty = !landmark;
  const textStyle = [styles.text];
  if (empty) textStyle.push(styles.placeholderText);

  return (
    <ItemBox {...rest} title={title} style={styles.container}>
      <Text style={[textStyle]}>
        {empty ? '请选择' : landmark.cnName}
      </Text>
    </ItemBox>
  );
}


Landmark.propTypes = {
  title: PropTypes.string.isRequired,
  landmark: PropTypes.instanceOf(LandmarkModel)
};
