
import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING } from '../../../styles';
import px from '../../../utils/px';

export const SectionHeader = StyleSheet.create({
  container: {
    height: px(88),
    justifyContent: 'center',
    backgroundColor: COMPONENT_BG_COLOR,
    paddingHorizontal: PADDING.md / 2,
  }
});

export const CityList = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    paddingHorizontal: PADDING.md / 2,
  }
});

export const Section = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});


export const CityItem = StyleSheet.create({
  container: {
    marginBottom: PADDING.md,
    flexGrow: 1,
  }
  // container: {
  //   height: px(76),
  //   borderWidth: LINE.width,
  //   borderColor: LINE.color,
  //   borderStyle: 'solid',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
});

