import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import dummyData from '../constants/dummyData';

const TransactionHistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction History</Text>
            <FlatList
                data={dummyData.transactions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.transaction}>
                        <Text>Type: {item.type}</Text>
                        <Text>Voucher Number: {item.voucherNumber}</Text>
                        <Text>Amount: R {item.value}</Text>
                        <Text>Merchant ID: {item.merchantId}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    transaction: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default TransactionHistoryScreen;
