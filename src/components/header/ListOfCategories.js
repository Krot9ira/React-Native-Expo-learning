import React from "react";
import {View, StyleSheet, Button, TouchableHighlight} from 'react-native';
import { SearchBar } from "react-native-elements";
import Categori from "./Categories";




// List of category


//Show categories from Categories.js
const ListOfCategories = () => {
    
    return (<View style={styles.containerBot}>
    <Categori/>
    <Categori/>
    <Categori/>
    
        </View>
        )
};
//Style for view
const styles = StyleSheet.create({
    containerBot:{
        
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#f0eff3',
        height: 100,
        paddingRight: 20,
        paddingLeft: 20,
        
    }
});

export default ListOfCategories