import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import {useDate, useDateNext, useDatePrev} from '../Context/DateContext'


const allMonths = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}


const TotalSpent = () => {
    const newDate = useDate()
    const nextDate = useDateNext()
    const prevDate = useDatePrev()

    return (
      <View  style={styles.spentContainer}>
        <TouchableOpacity 
            
            style={styles.backArrowContainer}
            onPress={() => prevDate()}
        >
            <Image
                source={require('../Images/back.png')}
                style={styles.backArrow}
            />
        </TouchableOpacity>
        <View style={styles.monthContainer}>
            <Text style={styles.monthText}>{allMonths[newDate[0]]} {newDate[1]}</Text>
            <Text style={styles.spentText}>$5,650</Text>
        </View>
        <TouchableOpacity 
            
            style={styles.nextArrowContainer}
            onPress={() => nextDate()}
        >
            <Image
                source={require('../Images/next.png')}
                style={styles.nextArrow}
            />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    spentContainer: {
        flex: 0.35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 50,

    },


    monthContainer: {
        alignItems: 'center'
    },

    monthText:{
        color: 'white',
        fontSize: 24,
    },
    spentText:{
        color: 'white',
        fontSize: 50,
        marginVertical: 10,
        fontWeight: 'bold'
    },

    backArrow:{
        height: 50, 
        width: 50,
    },
    nextArrow: {
        height: 50, 
        width: 50
    }

})

export default TotalSpent;