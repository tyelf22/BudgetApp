import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import ExpenseItem from './ExpenseItem';


const AllExpenses = () => {
    return (
      <ScrollView style={styles.allExpensesContainer}>
        <ExpenseItem vendor='Walmart' price='$1,200' date='10 October 2021' />
        <ExpenseItem vendor='Target' price='$1,200' date='12 October 2021' />
        <ExpenseItem vendor='Costco' price='$1,200' date='12 October 2021' />
        <ExpenseItem vendor='Nike' price='$1,200' date='14 October 2021' />
        <ExpenseItem vendor='Soelbergs' price='$1,200' date='16 October 2021' />
        <ExpenseItem vendor='Maverick' price='$1,200' date='15 October 2021' />

      </ScrollView>
    );
}



const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        marginTop: -65,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,



        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 2,
    },
})

export default AllExpenses;