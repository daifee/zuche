import React from 'react';
import { ScrollView } from 'react-native';
import CheckButton from '../../../components/CheckButton';
import { HotOptionList as styles } from './styles';

const data = [
  '芝麻信用免押金',
  '7座及以上',
  '百万第三者险',
  '全额险',
  '到店支付',
  '中文店员',
  '立即确认',
  '正式发票'
];

export default function HotOptionList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      horizontal
    >
      {data.map((val, index) => {
          const checked = index === 1;
          const key = `${index}`;
          return (
            <CheckButton
              key={key}
              checked={checked}
              style={styles.button}
              textStyle={styles.buttonText}
            >
              {val}
            </CheckButton>
          );
      })}
    </ScrollView>
  );
}
