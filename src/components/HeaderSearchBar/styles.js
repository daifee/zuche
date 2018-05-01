import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, COLOR, LINE } from '../../styles';
import px from '../../utils/px';


export const HeaderSearchBar = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: COMPONENT_BG_COLOR,
    borderBottomColor: LINE.color,
    borderBottomWidth: LINE.width,
    borderStyle: 'solid'
  },

  button: {
    justifyContent: 'center',
    flexShrink: 0,
    paddingHorizontal: px(24),
    backgroundColor: COMPONENT_BG_COLOR
  },

  buttonText: {
    color: COLOR.primary
  },

  searchBar: {
    //
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1
  }
});
