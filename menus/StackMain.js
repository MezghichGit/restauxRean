import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackMain = () => {
    return (
     
            <Stack.Navigator screenOptions={{headerShown: false}}>
             <Stack.Screen name= "Signin" component={SignInScreen}  />
             <Stack.Screen name= "Signup" component={SignUpScreen}  />
             <Stack.Screen name= "Dashboard" component={DrawerNavigator}  />
            </Stack.Navigator>
     
    )
}

export default StackMain ;
