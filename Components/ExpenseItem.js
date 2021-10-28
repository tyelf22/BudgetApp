import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const ExpenseItem = (props) => {
    return (
      <View  style={styles.itemContainer}>
        <View style={styles.topText}>
            <Text style={styles.itemVendor}>{props.vendor}</Text>
            <Text style={styles.itemPrice}>{props.price}</Text>
        </View>
        <Text style={styles.itemDate}>{props.date}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        paddingVertical: 25,
        borderBottomColor: '#d0d4d4',
        borderBottomWidth: 2, 
    },
    topText: {
        flexDirection: 'row',
    },
    itemVendor: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    itemPrice: {
        marginLeft: 'auto',
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemDate: {
        marginTop: 5,
        fontSize: 18,
        color: '#d0d4d4'
    }
})

export default ExpenseItem;