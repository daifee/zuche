/**
 * DatePicker APIs
 */

import React from 'react';
import { DatePickerIOS, View, Text } from 'react-native';
import { PopupBottom } from '../Popup';

export default function DatePicker(props) {
  return (<DatePickerIOS {...props} />);
}


export function show() {
  PopupBottom.show({
    content: (
      <View>
        <View><Text>hahahah</Text></View>
        <View><Text>hahahah</Text></View>
        <View><Text>hahahah</Text></View>
        <View><Text>hahahah</Text></View>
        <View><Text>hahahah</Text></View>
        <View><Text>hahahah</Text></View>
        <View><Text>hahahah</Text></View>
        <DatePicker
          date={new Date()}
          onDateChange={(param) => {
            console.log(param);
          }}
        />
      </View>
    )
  });
}
export function hide() {
  PopupBottom.hide();
}
