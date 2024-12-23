import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dummyData from '../constants/dummyData';

const MerchantScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Merchant Balances</Text>
      {dummyData.merchants.map((merchant) => (
        <View key={merchant.id} style={styles.merchantContainer}>
          <Text>Merchant ID: {merchant.id}</Text>
          <Text>Name: {merchant.name}</Text>
          <Text>Balance: R {merchant.bankAccountBalance}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  merchantContainer: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
});

export default MerchantScreen;
