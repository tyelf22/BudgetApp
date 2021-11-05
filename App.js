import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

import ExpenseItem from './Components/ExpenseItem'
import Header from './Components/Header'
import TotalSpent from './Components/TotalSpent'
import BudgetBar from './Components/BudgetBar'
import AllExpenses from './Components/AllExpenses'

//Get my global date & total
import { DateProvider } from './Context/DateContext'
import { TotalProvider } from './Context/TotalContext'

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header/>

      <LinearGradient 
      colors={['#56ccf2', '#2f80ed']} 
      start={{
        x: 1,
        y: 0.2
      }}
      end={{
        x: 0,
        y: 0.7
      }}
      style={styles.box} />
      <DateProvider>
      <TotalProvider>
        <TotalSpent/>
        <BudgetBar/>
        <AllExpenses/>
      </TotalProvider>
      </DateProvider>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto'
  },
  box: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',

  },

});
