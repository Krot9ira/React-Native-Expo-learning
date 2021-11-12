import React from "react";
import {View, StyleSheet, Button} from 'react-native';





// Header Bottom of App
//Two lines on SerachBar need to be remove


const Footer = () => {
    
    return (<View style={styles.containerBot}>
        </View>
        )
};
//Style for view
const styles = StyleSheet.create({
    containerBot:{
        
        
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 150,
        paddingRight: 20,
        paddingLeft: 20,
        
    }
});

export default Footer