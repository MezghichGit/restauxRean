import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./MyTabs";
import MonProfilScreen from "../screens/MonProfilScreen";
import DeconnexionScreen from "../screens/DeconnexionScreen";
import authtoken from "../service/authtoken";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#CA0B0B',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
            fontSize: 15,
        },
    }}>
      <Drawer.Screen name="PLB" component={MyTabs} />
      <Drawer.Screen name="Mon Profil" component={MonProfilScreen } />
      <Drawer.Screen name="Déconnexion"

      listeners={({ navigation }) => ({ 
          state: (e) => {
             if (e.data.state.index === 2) {
                // 2 is index of logout item in drawer
                authtoken.logout();
                navigation.replace("Signin")
             }
          }
      })}
      
      component={DeconnexionScreen} />

      {/*<Drawer.Screen name="Déconnexion" component={DeconnexionScreen} />*/}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
