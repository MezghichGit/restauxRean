import {Text, View, Button} from 'react-native';
import styles from '../styles';

 const DetailsRestauScreen =({ navigation }) =>{
    return (
        <View style={styles.container}>
            <Text>Détails RestauScreen</Text>
            <Button title="Liste Restaux" onPress={()=>navigation.navigate('ListRestaux')}></Button>
        </View>
    );
}

export default DetailsRestauScreen;
