import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function PinScreen() {
  const [pin, setPin] = useState('');
  const dummyPin = "1234";

  const handleSubmit = () => {
    if (pin === dummyPin) {
      Alert.alert('Success', 'Pin verified successfully!');
    } else {
      Alert.alert('Error', 'Invalid Pin. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Pin</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 4-digit Pin"
        keyboardType="numeric"
        maxLength={4}
        value={pin}
        onChangeText={setPin}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
