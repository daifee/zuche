
import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING } from '../../../styles';
import px from '../../../utils/px';

export const SectionHeader = StyleSheet.create({
  container: {
    height: px(88),
    justifyContent: 'center',
    backgroundColor: COMPONENT_BG_COLOR,
    paddingHorizontal: PADDING.md,
  }
});

export const CityList = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
  }
});

export const Section = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: PADDING.md / 2
  },
  itemWrapper: {
    width: '50%',
    marginBottom: PADDING.md,
  }
});


export const CityItem = StyleSheet.create({
  container: {
    marginHorizontal: PADDING.md / 2,
  }
});

