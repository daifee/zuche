import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import SideMenuComponent, { SideMenuItem } from '../../../components/SideMenu';
import StructCollection from '../../../models/Struct.Collection';
import Text from '../../../components/Text';

export default function SideMenu(props) {
  const { categories, selectedCategoryId } = props;

  return (
    <SideMenuComponent>
      <ScrollView>
        {categories.map((category) => {
          const key = `${category.id}`;
          const selected = category.id === selectedCategoryId;

          return (
            <SideMenuItem key={key} selected={selected}>
              <Text>{category.name}</Text>
            </SideMenuItem>
          );
        })}
      </ScrollView>
    </SideMenuComponent>
  );
}

SideMenu.propTypes = {
  categories: PropTypes.instanceOf(StructCollection).isRequired,
  selectedCategoryId: PropTypes.number
};
