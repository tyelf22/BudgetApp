import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


function ExpenseItem(props) {
    return (
      <View className="itemContainer">
        <Text>{props.vendor}</Text>
      </View>
    );
}

export default ExpenseItem;