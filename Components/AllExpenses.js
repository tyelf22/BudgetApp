import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList, ActivityIndicator} from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import ExpenseItem from './ExpenseItem';

import {useDate} from '../Context/DateContext'
import {useTotal, SetTotalContext} from '../Context/TotalContext'


const AllExpenses = () => {
  const [itemList, setItemList] = useState([])
  const priceList = []

  const newDate = useDate()

  const fetchData = () => {
    return fetch("https://te-budget-app.herokuapp.com/expenses")
      .then((response) => response.json())
      .then((data) => {
        let result = data.filter(el => ( (new Date(el.date).getMonth() + 1 == newDate[0]) && (new Date(el.date).getFullYear() == newDate[1]) ))
        console.log('result = ', result)
        result.forEach(el => priceList.push(el.price))
        SetTotalContext(priceList) //NOT FOUND!!!
        // let tot = data.reduce((prev, curr) => ) //TRY TO REDUCE THE ARRAY OF OBJECT 
        setItemList(result)
      });
  }
  
  useEffect(() => {
    console.log(useDate)
    fetchData();
    }, []);

    useEffect(() => {
      fetchData();
    }, [newDate]);

  if(itemList.length <= 0){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white"/>
      </View>
    )
  }else {
    return (
      <FlatList
      data={itemList}
      style={styles.allExpensesContainer} 
      keyExtractor={(item, index) => index.toString()} 
      renderItem={({item}) => {
          let theDate = new Date(item.date)
          let monthDate = theDate.getMonth() + 1
          let dayDate = theDate.getDate()
          let yearDate = theDate.getFullYear()
          return <ExpenseItem vendor={item.vendor} price={item.price} date={`${monthDate}/${dayDate}/${yearDate}`} />
      }}
      />
    );
  }

}

const styles = StyleSheet.create({

    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
    },
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



