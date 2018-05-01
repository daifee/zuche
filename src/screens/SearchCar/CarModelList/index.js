import React from 'react';
import { FlatList, View } from 'react-native';
import SiteTypeItem from './SiteTypeItem';
import { SiteTypeList as styles } from './styles';


export default function SiteTypeList() {
  return (
    <FlatList
      data={[{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]}
      renderItem={({ item, separators }) => {
        return (<SiteTypeItem
          selected={item.id === 'b'}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        />);
      }}
      keyExtractor={item => `${item.id}`}
      ItemSeparatorComponent={({ highlighted }) => {
        const style = [styles.separator];
        if (highlighted) {
          style.push(styles.separatorActive);
        }

        return <View style={style} />;
      }}
    />
  );
}

