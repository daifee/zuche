import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import BackButton from '../BackButton';
import Schedule from './Schedule';
import SearchParamsModel from '../../../models/SearchParams.Model';

export default function HeaderSchedule(props) {
  const { headerProps, searchParams } = props;
  return (
    <Header
      {...headerProps}
      left={<BackButton />}
      center={<Schedule searchParams={searchParams} />}
    />
  );
}

HeaderSchedule.propTypes = {
  headerProps: PropTypes.shape({
    ...Header.propTypes
  }),
  backButtonProps: PropTypes.shape({
    ...BackButton.propTypes
  }),
  searchParams: PropTypes.instanceOf(SearchParamsModel)
};

