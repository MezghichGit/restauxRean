import ListRestauxScreen from '../screens/ListRestauxScreen';
import DetailsRestauScreen from '../screens/DetailsRestauScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackRestaux = ()=> {
    return (
        <Stack.Navigator initialRouteName='ListRestaux' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListRestaux" component={ListRestauxScreen}></Stack.Screen>
            <Stack.Screen name="DetailsRestau" component={DetailsRestauScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackRestaux;
