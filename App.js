import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import MyTabs from './menus/MyTabs';
import DrawerNavigator from './menus/DrawerNavigator';
export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
);
}
