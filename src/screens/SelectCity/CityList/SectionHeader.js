import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../../../components/Text';

export default function SectionHeader(props) {
  const { section } = props;
  return (
    <View>
      <Text>{section.name}</Text>
    </View>
  );
}

SectionHeader.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};
