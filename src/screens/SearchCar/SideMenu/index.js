import React from 'react';
import { ScrollView } from 'react-native';
import { SideMenuContainer as styles } from './styles';
import SideMenu, { SideMenuItem } from '../../../components/SideMenu';
import Text from '../../../components/Text';

const data = [
  { title: '全部' },
  { title: '闪租', desc: '第一次租车首选' },
  { title: '限时特惠' },
  { title: 'SUV' },
  { title: 'MPV' },
  { title: '高级品牌', desc: '宝马 奔驰' },
  { title: 'SUV' },
  { title: 'MPV' },
  { title: '高级品牌', desc: '宝马 奔驰' },
  { title: 'SUV' },
  { title: 'MPV' },
  { title: '高级品牌', desc: '宝马 奔驰' },
  { title: 'SUV' },
  { title: 'MPV' },
  { title: '高级品牌', desc: '宝马 奔驰' },
];

export default function SideMenuContainer() {
  return (
    <SideMenu>
      <ScrollView>
        {data.map((item, index) => {
          const key = `${index}`;
          const selected = index === 1;
          return (
            <SideMenuItem key={key} selected={selected}>
              <Text
                numberOfLines={1}
                style={styles.title}
              >
                {item.title}
              </Text>
              {item.desc && (
                <Text
                  numberOfLines={1}
                  style={styles.desc}
                >
                  {item.desc}
                </Text>
              )}
            </SideMenuItem>
          );
        })}
      </ScrollView>
    </SideMenu>
  );
}
