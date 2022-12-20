import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import StackRestaux from './StackRestaux';
import StackDemandes from './StackDemandes';


const Tab = createBottomTabNavigator();  //Création du Tab Navigator

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    let iconName;
                    if (route.name == "Home") { iconName = "home-outline"; }
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Restaux" component={StackRestaux} />
            <Tab.Screen name="Demandes" component={StackDemandes} />
            <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs;
