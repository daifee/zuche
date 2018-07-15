import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CheckButton from '../../../components/CheckButton';
import { HotOptionList as styles } from './styles';
import CarFilterCollection from '../../../models/CarFilter.Collection';
import * as scopeStore from '../store';

function HotOptionList({ filterList, checkedFilter }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      horizontal
    >
      {filterList.map((filter) => {
          const key = filter.value;
          const checked = checkedFilter.indexOf(filter.value) !== -1;

          return (
            <CheckButton
              key={key}
              checked={checked}
              disable={filter.disable}
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => {
                if (filter.disable) {
                  return;
                }

                if (checked) {
                  scopeStore.dispatch('checkedFilter/remove', filter.value);
                } else {
                  scopeStore.dispatch('checkedFilter/add', filter.value);
                }
              }}
            >
              {filter.name}
            </CheckButton>
          );
      })}
    </ScrollView>
  );
}

HotOptionList.propTypes = {
  filterList: PropTypes.instanceOf(CarFilterCollection).isRequired,
  checkedFilter: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default connect(() => {
  const { filterList, checkedFilter } = scopeStore.getState();
  return { filterList, checkedFilter };
})(HotOptionList);
