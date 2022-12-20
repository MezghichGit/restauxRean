import {Text, View, Button} from 'react-native';
import styles from '../styles';

 const DetailsDemandeScreen =({ navigation }) =>{
    return (
        <View style={styles.container}>
            <Text>Détails DemandeScreen </Text>
            <Button title="Liste Demandes" onPress={()=>navigation.navigate('ListDemandes')}></Button>
        </View>
    );
}

export default DetailsDemandeScreen;
