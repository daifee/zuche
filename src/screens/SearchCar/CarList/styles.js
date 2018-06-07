import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING, LINE, FONT_SIZE, TEXT_COLOR_SECONDARY, BODY_BG_COLOR } from '../../../styles';
import px from '../../../utils/px';


export const CarList = StyleSheet.create({

});

export const CarModelSection = StyleSheet.create({

});

export const SectionHeader = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    paddingLeft: PADDING.md,
  },
  wrapper: {
    borderBottomColor: LINE.color,
    paddingVertical: PADDING.sm,
    borderBottomWidth: LINE.width,
  },
  title: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: FONT_SIZE.sm,
    paddingLeft: PADDING.xs,
    fontWeight: 'normal',
    color: TEXT_COLOR_SECONDARY
  }
});

export const CarModel = StyleSheet.create({

});

export const CarProvider = StyleSheet.create({

});

export const Section = StyleSheet.create({
  container: {
    height: 200,
    fontSize: 40,
    borderBottomColor: BODY_BG_COLOR,
    borderBottomWidth: px(40)
  }
});
