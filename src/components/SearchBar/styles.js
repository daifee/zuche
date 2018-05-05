import { StyleSheet } from 'react-native';
import {
  COMPONENT_BG_COLOR,
  BODY_BG_COLOR
} from '../../styles';


export const SearchBar = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    flex: 0,
  },
  input: {
    backgroundColor: BODY_BG_COLOR
  }
});


export const SearchBarPlaceholder = StyleSheet.create({
  container: {
    position: 'relative'
  },
  touchableContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
