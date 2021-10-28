import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'


const Header = () => {
    return (
      <View  style={styles.headerContainer}>
            <View style={styles.lineContainer}>
                <View style={styles.lineOne}></View>
                <View style={styles.lineTwo}></View>
                <View style={styles.lineThree}></View>
            </View>
            <Text style={styles.headerText}>Expenses</Text>
            <TouchableOpacity 
            
                style={styles.addBtn}
                onPress={() => console.log("touchable opacity pressed")}
            >
                <Image
                    source={require('../Images/plus.png')}
                    style={styles.plusIcon}
                />
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        zIndex: 1,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    lineOne: {
        height: 4,
        width: 10,
        backgroundColor: 'white',
        borderRadius: 60,
    },
    lineTwo: {
        height: 4,
        width: 25,
        backgroundColor: 'white',
        borderRadius: 60,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: "center",
    },
    lineThree: {
        height: 4,
        width: 10,
        backgroundColor: 'white',
        borderRadius: 60,
        alignSelf: "flex-end",
        
    },

    headerText: {
        color: 'white',
        fontSize: 24,
        marginLeft: 45
    },

    addBtn:{
        marginLeft: 'auto'

    },

    plusIcon:{
        height: 30,
        width: 30,
    }

})

export default Header;