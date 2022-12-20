import {Text, View, Button} from 'react-native';
import styles from '../styles';

 const AddDemandeScreen = ({ navigation }) =>{
    return (
        <View style={styles.container}>
            <Text>Add Demande Screen</Text>
            <Button title="Liste Demande" onPress={()=>navigation.navigate('ListDemandes')}></Button>
        </View>
    );
}

export default AddDemandeScreen;
