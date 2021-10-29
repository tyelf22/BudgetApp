import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import ExpenseItem from './ExpenseItem';

const data =[
    {
      id: 0,
      vendor: 'Soelbergs',
      price: '$23.50',
      date: '10/21/21'
    },
    {
      id: 1,
      vendor: 'Walmart',
      price: '$100.05',
      date: '10/22/21'
    },
    {
      id: 2,
      vendor: 'Costco',
      price: '$55.30',
      date: '10/23/21'
    },
    {
      id: 3,
      vendor: 'Cabelas',
      price: '$21.21',
      date: '10/25/21'
    },
    {
      id: 4,
      vendor: 'Amazon',
      price: '$200.32',
      date: '10/28/21'
    },
    {
      id: 5,
      vendor: 'Papa Johns',
      price: '$16.16',
      date: '10/29/21'
    },
] 

const AllExpenses = () => {
  const [itemList, setItemList] = useState(data)
    return (
      <FlatList
      data={itemList}
      style={styles.allExpensesContainer} 
      renderItem={({item}) => {
        return <ExpenseItem vendor={item.vendor} price={item.price} date={item.date} />
      }}
      />
    );
}



const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        marginTop: -75,
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



