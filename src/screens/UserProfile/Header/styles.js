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
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: px(40),
  },
  divider: {
    flexShrink: 0,
    opacity: 0.4,
    width: StyleSheet.hairlineWidth,
    marginVertical: px(16),
    backgroundColor: TEXT_COLOR_PRIMARY
  }
});

export const User = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row'
  },

  rightContainer: {
    flex: 0,
    marginLeft: px(30),
    justifyContent: 'center',
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
    paddingLeft: px(20),
    paddingTop: px(10),
    position: 'relative',
    overflow: 'hidden',
  },
  icon: {
    marginRight: px(8),
    marginTop: px(10),
  },
  redDot: {
    position: 'absolute',
    top: px(10),
    right: px(6),
    width: px(16),
    height: px(16),
    borderRadius: px(16),
    backgroundColor: 'red'
  }
});


export const WalletItem = StyleSheet.create({
  container: {
    flex: 1
  },
  textValue: {
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
    fontSize: px(36),
    lineHeight: px(36 * 1.5)
  },
  textTitle: {
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
    fontSize: px(24),
    lineHeight: px(24 * 1.5)
  }
});

