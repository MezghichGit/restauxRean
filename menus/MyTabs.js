import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

import StackContact from './StackContact';
import StackRestaux from './StackRestaux';
import StackDemandes from './StackDemandes';
const Tab = createBottomTabNavigator();  //Création du Tab Navigator

const MyTabs = () => {
    return (
        <Tab.Navigator
           
            screenOptions={
                ({ route }) => ({
                tabBarIcon: () => {
                    let iconName;
                    if (route.name == "Welcome") { iconName = "home-outline"; }
                    else if (route.name == "Restaux") { iconName = "restaurant-outline"; }
                    else if (route.name == "Demandes") { iconName = "create-outline"; }
                    else { iconName = "mail-outline"; }
                    return (
                        <Ionicons
                            name={iconName}
                            color={'red'}
                            size={18}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Welcome" component={HomeScreen} />
            <Tab.Screen name="Restaux" component={StackRestaux} />
            <Tab.Screen name="Demandes" component={StackDemandes} />
            <Tab.Screen name="Contact" component={StackContact} />
        </Tab.Navigator>
    );
}

export default MyTabs;
