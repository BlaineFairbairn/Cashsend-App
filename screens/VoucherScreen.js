import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import dummyData from '../constants/dummyData';

const VoucherScreen = ({ navigation }) => {
    const [voucherNumber, setVoucherNumber] = useState('');
    const [voucherPin, setVoucherPin] = useState('');
    const [merchantId, setMerchantId] = useState('');
    const [value, setValue] = useState('');

    const handleVoucherCheck = () => {
        const voucher = dummyData.vouchers.find(
            (v) => v.number === voucherNumber && v.pin === voucherPin
        );
        if (!voucher) {
            Alert.alert('Error', 'Invalid Voucher Number or PIN');
            return;
        }
        Alert.alert('Voucher Balance', `Remaining Balance: R ${voucher.balance}`);
    };

    const handleTransfer = () => {
        const voucher = dummyData.vouchers.find(
            (v) => v.number === voucherNumber && v.pin === voucherPin
        );
        if (!voucher || voucher.balance < value) {
            Alert.alert('Error', 'Invalid Voucher Details or Insufficient Balance');
            return;
        }

        voucher.balance -= value;

        const merchant = dummyData.merchants.find((m) => m.id === merchantId);
        if (merchant) {
            merchant.balance += value;
            dummyData.transactions.push({
                type: 'Transfer',
                voucherNumber,
                value,
                merchantId,
            });
        }

        Alert.alert('Success', `Voucher Transfer Completed! Amount: R ${value}`);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voucher Transfer</Text>
            <TextInput
                style={styles.input}
                placeholder="Voucher Number"
                onChangeText={setVoucherNumber}
                value={voucherNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Voucher PIN"
                secureTextEntry
                onChangeText={setVoucherPin}
                value={voucherPin}
            />
            <TextInput
                style={styles.input}
                placeholder="Merchant ID"
                onChangeText={setMerchantId}
                value={merchantId}
            />
            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                onChangeText={(text) => setValue(Number(text))}
                value={value}
            />
            <Button title="Check Voucher Balance" onPress={handleVoucherCheck} />
            <Button title="Transfer" onPress={handleTransfer} />
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default VoucherScreen;
