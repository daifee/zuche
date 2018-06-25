import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import RegionItem from './RegionItem';
import StructCollection from '../../../models/Struct.Collection';
import { RegionList as styles } from './styles';


export default function RegionList(props) {
  const { categoties } = props;

  return (
    <FlatList
      data={categoties.toArray()}
      renderItem={({ item, separators }) => {
        return (<RegionItem
          region={item}
          selected={item.id === 0}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        />);
      }}
      keyExtractor={region => `${region.id}`}
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

RegionList.propTypes = {
  categoties: PropTypes.instanceOf(StructCollection).isRequired
};
