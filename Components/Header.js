import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Modal, Pressable} from 'react-native'

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <View  style={styles.headerContainer}>
               <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <View style={styles.lineContainer}>
                <View style={styles.lineOne}></View>
                <View style={styles.lineTwo}></View>
                <View style={styles.lineThree}></View>
            </View>
            <Text style={styles.headerText}>Expenses</Text>
            <TouchableOpacity 
            
                style={styles.addBtn}
                onPress={() => setModalVisible(!modalVisible)}
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
    },




    //Modal Styles
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '85%',
        width: '95%'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})

export default Header;