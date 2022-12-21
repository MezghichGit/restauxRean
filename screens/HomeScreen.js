import {Text, View} from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
 const HomeScreen = () =>{
    const _storeData = async () => {
        try {
          /*await AsyncStorage.setItem(
            'mySecretData',
            'plb20221201',
          );*/

          let me = {
            "nom":"amine",
            "email":"amine.mezghich@gmail.com"
        };
        const jsonMe = JSON.stringify(me);
        await AsyncStorage.setItem(
            'me',
            jsonMe,
          );
        } catch (error) {
          // Error saving data
        }
      };
      _storeData();


    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
}

export default HomeScreen;
