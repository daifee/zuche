import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';
import ItemFooter from './ItemFooter';
import { Item as styles } from './styles';
import { ITEM_BG_COLOR_ACTIVE } from '../../styles';
import RightArrow from './RightArrow';

const ViewPropTypesStyle = View.propTypes.style;

export default function Item(props) {
  const {
    style,
    dividerStyle,
    header,
    headerContainerStyle,
    body,
    bodyContainerStyle,
    footer,
    footerContainerStyle,
    rightArrow,
    ...rest
  } = props;

  return (
    <TouchableHighlight
      underlayColor={ITEM_BG_COLOR_ACTIVE}
      {...rest}
      style={[styles.container, style]}
    >
      <React.Fragment>
        {header ? (
          <ItemHeader style={headerContainerStyle}>
            {header}
          </ItemHeader>
        ) : null}
        {body ? (
          <ItemBody style={bodyContainerStyle}>
            {body}
          </ItemBody>
        ) : null}
        {footer ? (
          <ItemFooter style={footerContainerStyle}>
            {footer}
          </ItemFooter>
        ) : null}
        {rightArrow && <RightArrow />}
        <View style={[styles.divider, dividerStyle]} />
      </React.Fragment>
    </TouchableHighlight>
  );
}

Item.propTypes = {
  style: ViewPropTypesStyle,
  dividerStyle: ViewPropTypesStyle,
  header: PropTypes.node,
  headerContainerStyle: ViewPropTypesStyle,
  body: PropTypes.node,
  bodyContainerStyle: ViewPropTypesStyle,
  footer: PropTypes.node,
  footerContainerStyle: ViewPropTypesStyle,
  rightArrow: PropTypes.bool
};
