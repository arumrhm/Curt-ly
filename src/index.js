import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screen/home";
import Profile from "./screen/profile";
import Tentang from "./screen/tentang";

const Stack = createBottomTabNavigator();

const Routes = ()=>{
    return(
    <Stack.Navigator >
        <Stack.Screen options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image source={require('../assets/home.png')}/>
                    )
                }
            }}   name='Home' component={Home}/>
            <Stack.Screen options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image s source={require('../assets/file.png')}/>
                    )
                }
            }} name='Tentang' component={Tentang}/>
            <Stack.Screen options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image s source={require('../assets/Profile.png')}/>
                    )
                }
            }} name='Profile' component={Profile}/>
    </Stack.Navigator>
    );
}

export default Routes;