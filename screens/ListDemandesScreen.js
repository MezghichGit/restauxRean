import {Text, View, Button} from 'react-native';
import styles from '../styles';

 const ListDemandesScreen = ({ navigation }) =>{
    return (
        <View style={styles.container}>
            <Text>List DemandesScreen</Text>
            <Button title="Add Demande" onPress={()=>navigation.navigate('AddDemande')}></Button>
            <Button title="Détails Demande" onPress={()=>navigation.navigate('DetailsDemande')}></Button>
        </View>
    );
}

export default ListDemandesScreen;
