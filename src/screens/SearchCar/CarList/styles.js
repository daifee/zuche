import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING, FONT_SIZE, TEXT_COLOR_SECONDARY, BODY_BG_COLOR, COLOR } from '../../../styles';
import px from '../../../utils/px';


export const CarList = StyleSheet.create({

});


export const SectionHeader = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    paddingLeft: PADDING.md,
  },
  wrapper: {
    // borderBottomColor: LINE.color,
    paddingVertical: PADDING.sm,
    // borderBottomWidth: LINE.width,
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
  image: {
    width: px(240),
    height: px(180)
  },
  desc: {
    color: TEXT_COLOR_SECONDARY,
    marginBottom: px(10),
  },
  orderNum: {
    color: COLOR.primary
  }
});

export const CarProvider = StyleSheet.create({
  logo: {
    width: px(100),
    height: px(50)
  },
  brandDesc: {
    fontSize: FONT_SIZE.xs,
    color: TEXT_COLOR_SECONDARY,
    textAlign: 'center'
  }
});

export const Section = StyleSheet.create({
  container: {
    // height: 200,
    // fontSize: 40,
    borderBottomColor: BODY_BG_COLOR,
    borderBottomWidth: px(40)
  }
});
