import { StyleSheet } from 'react-native';
import { COLOR, FONT_SIZE, TEXT_COLOR_PRIMARY } from '../../styles';
import px from '../../utils/px';


export const Button = StyleSheet.create({
  container: {
    backgroundColor: COLOR.normal,
    width: '100%',
    height: px(100),
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: FONT_SIZE.md
  }
});

export const ButtonPrimary = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary
  },

  textStyle: {
    fontWeight: 'bold',
    color: TEXT_COLOR_PRIMARY,
    fontSize: FONT_SIZE.md,
  }
});
