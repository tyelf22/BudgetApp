import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'


const TotalSpent = () => {
    return (
      <View  style={styles.spentContainer}>
        <TouchableOpacity 
            
            style={styles.backArrowContainer}
            onPress={() => console.log("arrow touched")}
        >
            <Image
                source={require('../Images/back.png')}
                style={styles.backArrow}
            />
        </TouchableOpacity>
        <View style={styles.monthContainer}>
            <Text style={styles.monthText}>October 2021</Text>
            <Text style={styles.spentText}>$5,650</Text>
        </View>
        <TouchableOpacity 
            
            style={styles.nextArrowContainer}
            onPress={() => console.log("arrow touched")}
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
        flex: 0.5,
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