import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import LandmarkModel from '../../../models/Landmark.Model';
import { Landmark as styles } from './styles';

export default function Landmark(props) {
  const { title, site } = props;
  const empty = !site;
  const textStyle = [styles.text];
  if (empty) textStyle.push(styles.placeholderText);

  return (
    <ItemBox title={title} style={styles.container}>
      <Text style={[textStyle]}>
        {empty ? '请选择' : site.cnName}
      </Text>
    </ItemBox>
  );
}


Landmark.propTypes = {
  title: PropTypes.string.isRequired,
  site: PropTypes.instanceOf(LandmarkModel)
};
