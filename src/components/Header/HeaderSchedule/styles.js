import { StyleSheet } from 'react-native';
import px from '../../../utils/px';
import { FONT_SIZE, TEXT_COLOR_SECONDARY } from '../../../styles';


export const HeaderSchedule = StyleSheet.create({
  //
});

export const Schedule = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  daysContainer: {
    marginHorizontal: px(20)
  },
  days: {
    fontSize: FONT_SIZE.xs,
    color: TEXT_COLOR_SECONDARY
  }
});


export const ScheduleItem = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  title: {
    fontSize: FONT_SIZE.sm
  },
  desc: {
    fontSize: FONT_SIZE.xs
  },
  textAlignLeft: {
    textAlign: 'left'
  },
  textAlignRight: {
    textAlign: 'right'
  }
});
