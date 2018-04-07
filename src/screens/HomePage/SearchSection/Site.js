import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';
import SiteModel from '../../../models/Site';
import { Site as styles } from './styles';

export default function Site(props) {
  const { title, site } = props;
  const empty = !site;
  const textStyle = [styles.text];
  if (empty) textStyle.push(styles.placeholderText);

  return (
    <ItemBox title={title} style={styles.container}>
      <Text style={[textStyle]}>
        {empty ? '请选择' : site.name_cn}
      </Text>
    </ItemBox>
  );
}


Site.propTypes = {
  title: PropTypes.string.isRequired,
  site: PropTypes.instanceOf(SiteModel)
};
