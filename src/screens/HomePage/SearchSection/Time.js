
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import { Time as style } from './styles';

const configMap = {
  pickup: {
    title: '取车时间',
  },
  dropoff: {
    title: '还车时间',
  },
};

export default function Time(props) {
  const { type, date } = props;
  const config = configMap[type];

  return (
    <View style={style.container}>
      <TimeDay date={date} title={config.title} />
      <TimeHour date={date} />
    </View>
  );
}

Time.propTypes = {
  type: PropTypes.oneOf(['pickup', 'dropoff']).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export function TimeAmount() {
  return (
    <ItemBox style={style.timeAmountContainer} title="">
      <Text style={style.timeAmount}>7天</Text>
    </ItemBox>
  );
}

function TimeDay(props) {
  const { date, title } = props;

  return (
    <ItemBox title={title} style={style.timeDayContainer}>
      <Text style={style.text}>12月{date.getDay()}日</Text>
    </ItemBox>
  );
}

TimeDay.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};


function TimeHour(props) {
  const { date } = props;

  return (
    <ItemBox title="周日">
      <Text style={style.text}>{date.getHours()}:00</Text>
    </ItemBox>
  );
}

TimeHour.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
