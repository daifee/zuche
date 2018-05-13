import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import BackButton from '../BackButton';
import Schedule from './Schedule';

export default function HeaderSchedule(props) {
  const { headerProps } = props;
  return (
    <Header
      {...headerProps}
      left={<BackButton />}
      center={<Schedule />}
    />
  );
}

HeaderSchedule.propTypes = {
  headerProps: PropTypes.shape({
    ...Header.propTypes
  }),
  backButtonProps: PropTypes.shape({
    ...BackButton.propTypes
  })
};

