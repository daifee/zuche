import { StyleSheet } from 'react-native';
import { PADDING, LINE, ITEM_BG_COLOR } from '../../styles';

const divider = {
  position: 'absolute',
  right: 0,
  left: 0,
  height: LINE.width,
  backgroundColor: LINE.color
};

export const List = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%'
  },
  topDividerStyle: {
    ...divider,
    top: 0
  },
  bottomDividerStyle: {
    ...divider,
    bottom: 0
  }
});

export const Item = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: ITEM_BG_COLOR,
    justifyContent: 'space-between',
    paddingVertical: PADDING.md,
  },
  divider: {
    ...divider,
    left: PADDING.md
  }
});


export const ItemHeader = StyleSheet.create({
  container: {
    flexShrink: 0,
    marginRight: PADDING.md,
  }
});

export const ItemBody = StyleSheet.create({
  container: {
    flexGrow: 1,
  }
});

export const ItemFooter = StyleSheet.create({
  container: {
    flexShrink: 0,
    marginLeft: PADDING.md,
  }
});
