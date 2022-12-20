import DetailsContactScreen from '../screens/DetailsContactScreen';
import MessageScreen from '../screens/MessageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackContact = ()=> {
    return (
        <Stack.Navigator initialRouteName='ListRestaux' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DetailsContact" component={DetailsContactScreen}></Stack.Screen>
            <Stack.Screen name="Message" component={MessageScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackContact;
