import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const ExpenseItem = (props) => {
    const rightSwipe = () => {
        return(
            <View style={styles.deleteBox}>
                <Text style={styles.deleteBoxText}>Delete</Text>
                <FontAwesomeIcon icon="coffee" />
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={rightSwipe}
            rightThreshold="50"
        >
            <View  style={styles.itemContainer}>
                <View style={styles.topText}>
                    <Text style={styles.itemVendor}>{props.vendor}</Text>
                    <Text style={styles.itemPrice}>{props.price}</Text>
                </View>
                <Text style={styles.itemDate}>{props.date}</Text>
            </View>
      </Swipeable>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: 'white',
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
    },

    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    deleteBoxText: {
        color: 'white',
        fontSize: 16
    }
})

export default ExpenseItem;