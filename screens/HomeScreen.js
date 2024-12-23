import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Voucher"
                onPress={() => navigation.navigate('Voucher')}
            />
            <Button
                title="Go to Withdrawal"
                onPress={() => navigation.navigate('Withdrawal')}
            />
            <Button
                title="Merchant Accounts"
                onPress={() => navigation.navigate('MerchantAccounts')}
            />
            <Button
                title="Transaction History"
                onPress={() => navigation.navigate('Transaction')} // This navigates to TransactionHistoryScreen
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    button: {
        marginBottom: 10,
    },
});

export default HomeScreen;
