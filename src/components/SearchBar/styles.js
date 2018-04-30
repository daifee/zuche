import { StyleSheet } from 'react-native';
import {
  COMPONENT_BG_COLOR,
  BODY_BG_COLOR
} from '../../styles';


export const SearchBar = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    flex: 1,
  },
  input: {
    backgroundColor: BODY_BG_COLOR
  }
});
