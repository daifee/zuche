import { StyleSheet } from 'react-native';
import {
  COLOR,
  TEXT_COLOR_PRIMARY,
  PADDING
} from '../../../styles';
import px from '../../../utils/px';

export const Header = StyleSheet.create({
  container: {
    // flex: 0,
    backgroundColor: COLOR.primary,
    paddingTop: px(70),
    paddingHorizontal: PADDING.md,
    // height: 200
  },
  topWrapper: {
    // flex: 0,
  }
});

export const User = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row'
  },

  rightContainer: {
    flex: 0,
    // flexDirection: 'row',
    marginLeft: px(30),
    // alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    // flex: 1
  },

  usernameText: {
    color: TEXT_COLOR_PRIMARY
  },

  vipContainer: {
    marginTop: px(6),
    flexDirection: 'row',
  },

  vipText: {
    marginHorizontal: px(4),
    color: TEXT_COLOR_PRIMARY
  }
});
