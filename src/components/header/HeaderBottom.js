import React from "react";
import {View, StyleSheet, Button} from 'react-native';
import { SearchBar } from "react-native-elements";
import Categori from "./Categories";



// Header Bottom of App
//Two lines on SerachBar need to be remove


const HeaderBot = () => {
    const [value, setValue] = React.useState("");
    return (<View style={styles.containerBot}>
    <SearchBar 
      platform="default"
      containerStyle={{ backgroundColor: "#242732", paddingTop: -100, marginTop: -25}}
      inputContainerStyle={{ backgroundColor: "#ffffff", width: '100%'}}
      inputStyle={{color: '#232630'}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Search for anything"
      placeholderTextColor="#8b8e96"
      round
     
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
      
    />
        </View>
        )
};
//Style for view
const styles = StyleSheet.create({
    containerBot:{
        
        
        alignItems: "center",
        
        backgroundColor: '#242732',
        height: 100,
        paddingRight: 20,
        paddingLeft: 20,
        
    }
});

export default HeaderBot