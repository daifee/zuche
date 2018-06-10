import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import SearchBar from '../SearchBar';
import { HeaderSearchBar as styles } from './styles';
import Header from './Header';
import { viewStyle, textStyle } from '../../propTypes';


export default function HeaderSearchBar(props) {
  const enchanceProps = { ...HeaderSearchBar.defaultProps, ...props };
  const {
    headerProps, searchBarProps, buttonProps, onCancel
  } = enchanceProps;

  const { centerContainerStyle } = headerProps;
  const searchBarContainerStyle = searchBarProps.containerStyle;

  return (
    <Header
      {...headerProps}
      centerContainerStyle={[styles.centerContainer, centerContainerStyle]}
      center={(
        <React.Fragment>
          <SearchBar
            containerStyle={[styles.searchBar, searchBarContainerStyle]}
          />
          <TouchableOpacity
            style={[styles.button, buttonProps.containerStyle]}
            onPress={onCancel}
          >
            <Text style={[styles.buttonText, buttonProps.textStyle]}>
              取消
            </Text>
          </TouchableOpacity>
        </React.Fragment>
      )}
    />
  );
}


HeaderSearchBar.defaultProps = {
  headerProps: {},
  searchBarProps: {},
  buttonProps: {}
};

HeaderSearchBar.propTypes = {
  onCancel: PropTypes.func,
  headerProps: PropTypes.shape({
    ...Header.propTypes
  }),
  searchBarProps: PropTypes.shape({
    ...SearchBar.propTypes
  }),
  buttonProps: {
    contrainerStyle: viewStyle,
    textStyle: textStyle,
    content: PropTypes.string
  }
};
