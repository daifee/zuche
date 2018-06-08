/**
 * * 车型图
 * * 车型专业名称
 * * 车型通俗名称/座位/自动挡
 * * 适用性提示：
 *   * 经济省油、适合两人、短途；
 *   * 后排空间较窄，适合2人+2行李箱
 * * 门店信息
 * * 取/还车信息
 * * 确认/取消订单方式
 * * 促销优惠信息
 * * 保险服务信息
 * * 额外服务选项
 * * 里程/燃油信息
 * * 必备材料
 * * 租车须知
 * * 注意事项
 * * 当地交规
 */


import React from 'react';
import { View, Text } from 'react-native';
import { HeaderSchedule as Header } from '../../components/Header';

class Car extends React.Component {
  static navigationOptions = {
    header: Header
  };

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View>
        <Text>{this.displayName}</Text>
      </View>
    );
  }
}

export default Car;
