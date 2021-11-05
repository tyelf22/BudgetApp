import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//library.add(fab, faCheckSquare, faCoffee)


const ExpenseItem = (props) => {
    const rightSwipe = () => {
        return(
            <View style={styles.deleteBox}>
                {/* <Text style={styles.deleteBoxText}>Delete</Text> */}
                
                <TouchableOpacity 
                    style={styles.deleteBtn}
                    onPress={() => console.log("arrow touched")}
                >
                    <FontAwesomeIcon style={styles.icons} icon={ faTrash } size={ 22 } />
                </TouchableOpacity>

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
                    <Text style={styles.itemPrice}>${props.price}</Text>
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
    deleteBtn: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteBoxText: {
        color: 'white',
        fontSize: 16
    },
    icons: {
        color: 'white',
    }
})

export default ExpenseItem;