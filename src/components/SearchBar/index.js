import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar as SearchBarComponent } from 'react-native-elements';
import { SearchBar as styles } from './styles';


export default function SearchBar(props) {
  const { containerStyle, inputStyle } = props;

  return (
    <SearchBarComponent
      lightTheme
      containerStyle={[styles.container, containerStyle]}
      inputStyle={[styles.input, inputStyle]}
    />
  );
}

SearchBar.propTypes = {
  ...SearchBarComponent.propTypes,
  containerStyle: PropTypes.number,
  inputStyle: PropTypes.number
};
