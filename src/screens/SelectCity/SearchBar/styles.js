import { StyleSheet } from 'react-native';
import {
  COMPONENT_BG_COLOR,
  BODY_BG_COLOR
} from '../../../styles';


export const SearchBar = StyleSheet.create({
  container: {
    position: 'relative'
  },
  searchBarContainer: {
    backgroundColor: COMPONENT_BG_COLOR
  },
  input: {
    backgroundColor: BODY_BG_COLOR
  }
});
