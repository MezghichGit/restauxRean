import {Text, View, Button} from 'react-native';
import styles from '../styles';

 const ListRestauxScreen = ({ navigation }) =>{
    return (
        <View style={styles.container}>
            <Text>List RestauxScreen</Text>
            <Button title="Détails Restaux" onPress={()=>navigation.navigate('DetailsRestau')}></Button>
        </View>
    );
}

export default ListRestauxScreen;
