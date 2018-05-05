import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Title from './Title';
import BackButtom from './BackButton';

export default function HeaderDefault(props) {
  const { headerProps, backButtonProps, titleProps } = props;
  return (
    <Header
      left={(<BackButtom {...backButtonProps} />)}
      center={(<Title {...titleProps} />)}
      {...headerProps}
    />
  );
}

HeaderDefault.defaultProps = {
  headerProps: {},
  backButtonProps: {},
  titleProps: {}
};

HeaderDefault.propTypes = {
  headerProps: PropTypes.shape({
    ...Header.propTypes
  }),
  backButtonProps: PropTypes.shape({
    ...BackButtom.propTypes
  }),
  titleProps: PropTypes.shape({
    ...Title.propTypes
  })
};
