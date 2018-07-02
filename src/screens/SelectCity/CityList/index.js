import React from 'react';
import PropTypes from 'prop-types';
import SectionListComponent from '../../../components/SectionList';
import StructCollection from '../../../models/Struct.Collection';
import SectionHeader from './SectionHeader';
import Section from './Section';

import { CityList as styles } from './styles';
import CityModel from '../../../models/City.Model';

function createSection(id, name, cities) {
  return { id, name, data: cities };
}

function groupCitiesByLetter(cities) {
  const sortedCities = [...cities];
  sortedCities.sort((l, r) => {
    return l.enName > r.enName ? 1 : -1;
  });

  const mapGroups = {};
  sortedCities.forEach((city) => {
    const letter = city.enName.substring(0, 1).toUpperCase();
    if (!mapGroups[letter]) {
      mapGroups[letter] = {
        id: letter,
        data: []
      };
    }

    mapGroups[letter].data.push(city);
  });

  const groups = Object.keys(mapGroups).map((key) => {
    return mapGroups[key];
  });

  groups.sort((l, r) => {
    return l.id > r.id ? 1 : -1;
  });

  return groups;
}

export default function CityList(props) {
  const {
    categorizedCities, selectedCategoryId, selectedCity, onPressItem
  } = props;

  let category;
  const citySections = [];
  categorizedCities.each((item) => {
    if (item.id === selectedCategoryId) {
      category = item;
    }
  });

  if (category) {
    // 热门 hotCities
    const section = createSection('hotCities', '热门', category.hotCities);
    citySections.push(section);
    // 字母顺序&分组 allCities
    const cityGroups = groupCitiesByLetter(category.allCities);
    cityGroups.forEach((cityGroup) => {
      const section = createSection(cityGroup.id, cityGroup.id, cityGroup.data);
      citySections.push(section);
    });
  }

  return (
    <SectionListComponent
      style={styles.container}
      sections={citySections}
      renderSectionHeader={({ section }) => {
        return (<SectionHeader section={section} />);
      }}
      renderSection={(section) => {
        return (
          <Section
            section={section}
            selectedCity={selectedCity}
            onPressItem={onPressItem}
          />
        );
      }}
      keyExtractor={({ id }) => {
        return id;
      }}
    />
  );
}

CityList.propTypes = {
  categorizedCities: PropTypes.instanceOf(StructCollection).isRequired,
  selectedCategoryId: PropTypes.number.isRequired,
  selectedCity: PropTypes.instanceOf(CityModel),
  onPressItem: PropTypes.func.isRequired
};

