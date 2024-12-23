import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import dummyData from '../constants/dummyData';

const MerchantAccountsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Merchant Accounts</Text>
            <FlatList
                data={dummyData.merchants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>Merchant ID: {item.id}</Text>
                        <Text style={styles.text}>Name: {item.name}</Text>
                        <Text style={styles.text}>Balance: R {item.balance}</Text>
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
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default MerchantAccountsScreen;
