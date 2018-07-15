import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionList from '../../../components/SectionList';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CarCollection from '../../../models/Car.Collection';
import * as scopeStore from '../store';
import CarModel from '../../../models/Car.Model';


function CarList({ carList }) {
  return (<SectionList
    sections={carList}
    renderSectionHeader={({ section: car }) => {
      const carModel = new CarModel(car);
      return (<SectionHeader car={carModel} />);
    }}
    renderSection={(car) => {
      return (<Section car={car} />);
    }}
    keyExtractor={(car) => {
      return car.book;
    }}
  />);
}

CarList.propTypes = {
  carList: PropTypes.instanceOf(CarCollection).isRequired
};

export default connect((rootState) => {
  const { carList } = scopeStore.getState(rootState);
  return { carList };
})(CarList);
