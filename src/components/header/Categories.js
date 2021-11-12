import React from "react";
import {View, StyleSheet} from 'react-native';
import { Image, Text } from "react-native-elements";



// Categories
// In future will accept info to display


const Categori = () => {
    return (<View style={styles.containerTop}>
    <Image
      containerStyle={{}}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      placeholderStyle={{}}
      transitionDuration={1000}
      source={{
        uri:
          "https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png"
      }}
      style={{ width: 25, height: 25, borderRadius: 5, }}
    />
    <Text>Name of category</Text>
        </View>
        )
};
//Style for view
const styles = StyleSheet.create({
    containerTop:{
        
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        height: "100%",
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 15,
        borderRadius: 20,
        width: "32%",
        paddingBottom: 10,
        marginTop: -100
    }
});

export default Categori