import React from "react";
import {View, StyleSheet} from 'react-native';
import { Avatar, Text, ListItem, SearchBar } from "react-native-elements";



// Header Top of App
// Personal information in future will be automatically set


const HeaderTop = () => {
    return (<View style={styles.containerTop}>
    <ListItem.Content>
      <Text style= {{color: '#f4f4f8', fontSize: 20}}>Hello Name </Text>
      <Text style= {{color: '#8b8e96', fontSize: 18}}>Lets Start Learning </Text>
    </ListItem.Content>
    <Avatar activeOpacity={0.2}
        avatarStyle={{}}
        containerStyle={{ backgroundColor: "#ffffff" }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
        onLongPress={() => alert("onLongPress")}
        onPress={() => alert("onPress")}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size="medium"
        source={{ uri: "" }}
        title="P"
        titleStyle={{}}/>
        </View>
        )
};
//Style for view
const styles = StyleSheet.create({
    containerTop:{
       
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#242732',
        height: 150,
        paddingRight: 20,
        paddingLeft: 20
    }
});

export default HeaderTop