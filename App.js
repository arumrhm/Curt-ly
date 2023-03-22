import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from "./src";

const Stack=createNativeStackNavigator();
const routes=createBottomTabNavigator();

const App = () => {
  
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:0,
    flex:1,
    backgroundColor:'blue'
  }
})

export default App;