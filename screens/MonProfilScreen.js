import {Text, View,Image} from 'react-native';
import styles from '../styles';
 const MonProfilScreen = () =>{
    return (
        <View style={[styles.container,styles.containerContact]}>
            <Text style={styles.titreText}>Mes infos de contact</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png',
                }} />
            <Text>Mohamed Amine MEZGHICH</Text>
            <Text>amine.mezghich@gmail.com</Text>
            <Text>Téléphone : 33 (0)1 43 34 90 94</Text>
            <Text>Adresse : Paris LEVALLOIS-PERRET</Text>
            
        </View>
    );
}

export default MonProfilScreen;
