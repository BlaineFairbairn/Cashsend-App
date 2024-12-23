import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import VoucherScreen from './screens/VoucherScreen';
import WithdrawalScreen from './screens/WithdrawalScreen';
import MerchantAccountsScreen from './screens/MerchantAccountsScreen';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#6200ee' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Voucher" component={VoucherScreen} />
                <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
                <Stack.Screen name="MerchantAccounts" component={MerchantAccountsScreen} />
                <Stack.Screen name="Transaction" component={TransactionHistoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
