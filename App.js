import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ExpenseItem from './Components/ExpenseItem'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <ExpenseItem vendor="Walmart"></ExpenseItem>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
