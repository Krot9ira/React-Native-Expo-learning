import React from 'react';
import { View, StyleSheet } from 'react-native';
import Body from './src/components/body/body';
import Footer from './src/components/footer/Footer';
import HeaderBot from './src/components/header/HeaderBottom';
import HeaderTop from './src/components/header/HeaderTop';
import ListOfCategories from './src/components/header/ListOfCategories';


export default function App() {
  return (
    <View style={styles.container}>
      <HeaderTop style={{flex: 1}}/>
      <HeaderBot style={{flex: 1}}/>
      <ListOfCategories style={{flex: 1}} />
      <Body style={{flex: 3}}/>
      <Footer style={{flex: 1}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "column"
      
      
     
  }
});
