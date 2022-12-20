import ListDemandesScreen from '../screens/ListDemandesScreen';
import AddDemandeScreen from '../screens/AddDemandeScreen';
import DetailsDemandeScreen from '../screens/DetailsDemandeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackDemandes = ()=> {
    return (
        <Stack.Navigator initialRouteName='ListDemandes' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListDemandes" component={ListDemandesScreen}></Stack.Screen>
            <Stack.Screen name="AddDemande" component={AddDemandeScreen}></Stack.Screen>
            <Stack.Screen name="DetailsDemande" component={DetailsDemandeScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackDemandes;
