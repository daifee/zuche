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
    flexDirection: 'row',
    justifyContent: 'space-between',
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


export const Notification = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  icon: {
    marginRight: px(8),
    marginTop: px(10),
  },
  redDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: px(16),
    height: px(16),
    borderRadius: px(16),
    backgroundColor: 'red'
  }
});

