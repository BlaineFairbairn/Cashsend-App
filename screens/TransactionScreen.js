import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dummyData from '../constants/dummyData';

const TransactionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      {dummyData.transactions.length === 0 ? (
        <Text>No transactions available.</Text>
      ) : (
        dummyData.transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionContainer}>
            <Text>Type: {transaction.type}</Text>
            <Text>Voucher Number: {transaction.voucherNumber}</Text>
            <Text>Merchant ID: {transaction.merchantId || 'N/A'}</Text>
            <Text>Value: R {transaction.value}</Text>
            <Text>Remaining Balance: R {transaction.remainingBalance}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  transactionContainer: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
});

export default TransactionScreen;
