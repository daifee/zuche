import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import { SearchBarPlaceholder as styles } from './styles';
import SearchBar from './SearchBar';

export default function SearchBarPlaceholder(props) {
  const { searchBarProps, onPress } = props;

  return (
    <View style={styles.container}>
      <SearchBar {...searchBarProps} />
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.touchableContainer} />
      </TouchableWithoutFeedback>
    </View>
  );
}

SearchBarPlaceholder.defaultProps = {
  searchBarProps: {}
};

SearchBarPlaceholder.propTypes = {
  searchBarProps: PropTypes.shape({
    ...SearchBar.propTypes
  }),
  onPress: PropTypes.func
};
