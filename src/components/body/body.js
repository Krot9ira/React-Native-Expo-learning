import React from "react";
import {View, StyleSheet, Button} from 'react-native';





// Main body
//


const Body = () => {
    
    return (<View style={styles.containerBot}>
        </View>
        )
};
//Style for view
const styles = StyleSheet.create({
    containerBot:{
        
        
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#f0eff3',
        height: 250,
        paddingRight: 20,
        paddingLeft: 20,
        
    }
});

export default Body