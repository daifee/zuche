import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SideMenuContainer as styles } from './styles';
import SideMenu, { SideMenuItem } from '../../../components/SideMenu';
import Text from '../../../components/Text';
import CarKindCollection from '../../../models/CarKind.Collection';
import * as scopeStore from '../store';


function SideMenuContainer({ kindList, checkedKind }) {
  return (
    <SideMenu>
      <ScrollView>
        {kindList.map((kind) => {
          const key = kind.kind_code;
          const selected = kind.kind_code === checkedKind;

          return (
            <SideMenuItem
              key={key}
              selected={selected}
              onPress={() => {
                if (!selected) {
                  scopeStore.dispatch('checkedKind/set', kind.kind_code);
                  scopeStore.dispatch('carList/get');
                }
              }}
            >
              <Text
                numberOfLines={1}
                style={styles.title}
              >
                {kind.name}
              </Text>
              {kind.intro ? (
                <Text
                  numberOfLines={1}
                  style={styles.desc}
                >
                  {kind.intro}
                </Text>
              ) : null}
            </SideMenuItem>
          );
        })}
      </ScrollView>
    </SideMenu>
  );
}

SideMenuContainer.propTypes = {
  kindList: PropTypes.instanceOf(CarKindCollection).isRequired,
  checkedKind: PropTypes.string.isRequired
};


export default connect((rootState) => {
  const { checkedKind, kindList } = scopeStore.getState(rootState);
  return { checkedKind, kindList };
})(SideMenuContainer);
