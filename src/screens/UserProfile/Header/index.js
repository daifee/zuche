/**
 * Header
 * * User
 * * Notification
 * * WalletList
 * * WalletItem
 */

import React from 'react';
import { View } from 'react-native';
import User from './User';
import Notification from './Notification';
import { Header as styles } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <User />
        <Notification />
      </View>
    </View>
  );
}

