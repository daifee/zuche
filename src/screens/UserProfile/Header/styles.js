import { StyleSheet } from 'react-native';
import {
  COLOR,
  TEXT_COLOR_PRIMARY,
  PADDING
} from '../../../styles';
import px from '../../../utils/px';

export const Header = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
    paddingTop: px(70),
    paddingHorizontal: PADDING.md,
    // height: 200
  },
  topWrapper: {
    flex: 1,
  }
});

export const User = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  rightContainer: {
    flex: 1,
    // flexDirection: 'row',
    marginLeft: px(30),
    // alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1
  },

  usernameText: {
    color: TEXT_COLOR_PRIMARY
  },

  vipContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  vipText: {
    // marginTop: px(4),
    color: TEXT_COLOR_PRIMARY
  }
});
