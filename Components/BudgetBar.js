import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'


const BudgetBar = () => {
    return (
      <View  style={styles.barContainer}>
          <View style={styles.barText}>
            <Text style={styles.titleText}>Month Budget</Text>
            <Text style={styles.priceText}>$8,000</Text>
            <Text style={styles.percentText}>71%</Text>
          </View>
        <View style={styles.progressBar}></View>

        <LinearGradient 
      colors={['#56ccf2', '#2f80ed']} 
      start={{
        x: 1,
        y: 0.2
      }}
      end={{
        x: 0,
        y: 0.7
      }}
      style={styles.progressBarTop}>
    </LinearGradient>

      </View>
    );
}

const styles = StyleSheet.create({
    barContainer: {
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 30,
        paddingHorizontal: 35,
        paddingTop: 40
    },
    barText: {
        flexDirection: 'row',
    },
    titleText: {
        marginRight: 15,
        fontWeight: 'bold',
        fontSize: 15 
    },
    priceText: {
        color: '#9E9E9E',
        fontSize: 15 
    },
    percentText: {
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    progressBar: {
        marginTop: 10,
        height: 3,
        width: '100%',
        backgroundColor: '#d0d4d4'
    },
    progressBarTop: {
        marginTop: -6,
        height: 8,
        width: '71%',
        backgroundColor: 'red',
        elevation: 4,
        borderRadius: 30
    }

})

export default BudgetBar;