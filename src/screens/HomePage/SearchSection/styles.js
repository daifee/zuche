import { StyleSheet } from 'react-native';
import px from '../../../utils/px';
import {
  PADDING,
  COMPONENT_BG_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_SECONDARY,
  FONT_SIZE,
  LINE
} from '../../../styles';

const itemValueText = {
  color: TEXT_COLOR,
  fontSize: FONT_SIZE.md,
};

const itemValuePlaceholder = {
  color: TEXT_COLOR_SECONDARY,
  fontSize: FONT_SIZE.md
};


export const SearchSection = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
  },

  buttonContainer: {
    paddingVertical: 20,
  },

  button: {
    backgroundColor: '#4e7cdd',
  },
});


export const Address = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: MARGIN,
    paddingTop: PADDING.md,
    marginHorizontal: PADDING.md,
  }
});

export const DropoffSwitch = StyleSheet.create({
  container: {
    marginTop: px(6)
  }
});

export const City = StyleSheet.create({
  container: {
    width: px(180)
  },
  text: itemValueText,
  placeholderText: itemValuePlaceholder
});

export const Site = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: PADDING.md
  },
  text: itemValueText,
  placeholderText: itemValuePlaceholder
});


export const Schedule = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: PADDING.md,
    marginHorizontal: PADDING.md,
  },
});

export const Time = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export const TimeDay = StyleSheet.create({
  container: {
    flex: 1
  },
  text: itemValueText
});

export const TimeHours = StyleSheet.create({
  text: itemValueText
});

export const TimeAmount = StyleSheet.create({
  container: {
    width: px(60),
    marginHorizontal: PADDING.md,
    borderBottomColor: 'transparent'
  },
  text: {
    textAlign: 'center',
    fontSize: FONT_SIZE.sm
  }
});


export const ItemBox = StyleSheet.create({
  container: {
    borderBottomWidth: LINE.width,
    borderBottomColor: LINE.color,
    borderStyle: 'solid',
    paddingBottom: PADDING.md,
    overflow: 'hidden'
  },

  title: {
    fontSize: FONT_SIZE.sm,
    color: TEXT_COLOR_SECONDARY
  },

  childrenContainer: {
    marginTop: PADDING.md
  },
});
