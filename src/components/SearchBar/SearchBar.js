import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar as SearchBarComponent } from 'react-native-elements';
import { SearchBar as styles } from './styles';
import { viewStyle } from '../../propTypes';


export default function SearchBar(props) {
  const { containerStyle, inputStyle, ...rest } = props;

  return (
    <SearchBarComponent
      lightTheme
      {...rest}
      containerStyle={[styles.container, containerStyle]}
      inputStyle={[styles.input, inputStyle]}
    />
  );
}

SearchBar.defaultProps = {
  placeholder: 'search'
};

SearchBar.propTypes = {
  ...SearchBarComponent.propTypes,
  containerStyle: viewStyle,
  inputStyle: viewStyle,
  placeholder: PropTypes.string
};
