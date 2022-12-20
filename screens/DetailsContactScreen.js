import { Text, View, Button, Image } from 'react-native';
import styles from '../styles';
const DetailsContactScreen = ({ navigation }) => {
    return (
        <View style={[styles.container,styles.containerContact]}>
            <Text style={styles.titreText}>Détails Contact PLB</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
                }} />
            <Text>Email : plb@plb.fr</Text>
            <Text>Téléphone : 33 (0)1 43 34 90 94</Text>
            <Text>Adresse : PLB Consultant 3-5, rue Maurice Ravel 92300 LEVALLOIS-PERRET</Text>
            <Button title="Envoyer votre message ici" onPress={() => navigation.navigate('Message')}></Button>
        </View>
    );
}

export default DetailsContactScreen;
