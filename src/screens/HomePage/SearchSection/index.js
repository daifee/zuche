import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Address from './Address';
import Schedule from './Schedule';
import SearchButton from './SearchButton';
import { SearchSection as styles } from './styles';
import { getState as globalGetState } from '../../../store';
import SearchParams from '../../../models/SearchParams.Model';


function SearchSection(props) {
  const { searchParams } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>国际租车</Text>
      </View>
      <Address
        type="pickup"
        city={searchParams.pickupCity}
        landmark={searchParams.pickupLandmark}
        switchValue={!searchParams.sameCity}
      />
      {searchParams.sameCity || (<Address
        type="dropoff"
        city={searchParams.dropoffCity}
        landmark={searchParams.dropoffLandmark}
      />)}
      <Schedule searchParams={searchParams} />

      <SearchButton />
    </View>
  );
}

SearchSection.propTypes = {
  searchParams: PropTypes.instanceOf(SearchParams).isRequired
};

export default connect(() => {
  const { searchParams } = globalGetState();
  return { searchParams };
})(SearchSection);
