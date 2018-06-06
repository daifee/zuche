import React from 'react';
// import { View } from 'react-native';
import SectionList from '../../../components/SectionList';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function CarList() {
  return (<SectionList
    sections={[{}, {}, {}, {}, {}, {}, {}]}
    renderSectionHeader={() => {
      return (<SectionHeader />);
    }}
    renderSection={() => {
      return (<Section />);
    }}
  />);
}
