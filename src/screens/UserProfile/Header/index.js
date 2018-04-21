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
import WalletItem from './WalletItem';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <User />
        <Notification />
      </View>
      <View style={styles.bottomWrapper}>
        <WalletItem
          title="优惠券"
          value="7"
        />
        <View style={styles.line} />
        <WalletItem
          title="代金券"
          value="0"
        />
        <View style={styles.line} />
        <WalletItem
          title="钱包余额"
          value="￥0"
        />
      </View>
    </View>
  );
}

