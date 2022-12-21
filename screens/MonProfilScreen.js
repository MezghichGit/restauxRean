/*import {Text, View,Image} from 'react-native';
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

export default MonProfilScreen;*/
import React, {useState} from 'react';
import { View,StyleSheet,Text, ScrollView,TouchableOpacity ,Image,useWindowDimensions} from 'react-native';
import CustomInput from '../composants/CustomInput';
import CustomButton from '../composants/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.png'
const MonProfilScreen = () => {
    const [nom, setNom] = useState('') ;
    const [prenom, setPrenom] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const {height} = useWindowDimensions();
const navigation = useNavigation ();

/*const OnSignInPressed =() => {
    navigation.navigate('Signin');

};*/

const OnUpdateProfilPressed = () => {
    //navigation.navigate('Confirmemail');
    console.log("Profil updated...");
  };

  return (

  <View style={styles.root}>
  <Image 
     source={{
        uri: 'https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png',
    }}
     style={[styles.logo, {height:height*0.3}]} 
     resizeMode="contain" />
    <Text style={styles.title}>Mes informations de contact</Text>

    <CustomInput
    placeholder="Mohamed Amine MEZGHICH"
    value={nom}
    setValue={setNom}
     />
      

    <CustomInput
    placeholder="amine.mezghich@gmail.com"
    value={email}
    setValue={setEmail}
     />

    <CustomInput
    placeholder="Téléphone : 33 (0)1 43 34 90 94"
    value={password}
    setValue={setPassword}
    secureTextEntry={true}
      />

<CustomInput
    placeholder="Adresse : Paris LEVALLOIS-PERRET"
    value={password}
    setValue={setPassword}
    secureTextEntry={true}
      />
  

    <CustomButton 
    text="Mise à jour"
    onPress={OnUpdateProfilPressed}
    type="PRIMARY"
    />


   <TouchableOpacity>
          <Text style={styles.FooterText}>© 2022 Copyright - PLB</Text>
        </TouchableOpacity>


  </View>

//</ScrollView> 

  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height:50,
    maxWidth: 400,
    maxHeight:100,
    marginBottom: 0,
    marginTop: 30

  },
    root: {
        alignItems: 'center',
        padding: 20,   
         backgroundColor:'#EEF9EE'
    
    },

    title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    margin: 25,
    marginTop:10
    
    },
    NormalText:{
      color:"gray",
      fontSize:14,
      marginTop:40
    },
        
        FooterText:{
          color:"gray",
          fontSize:12,
          marginTop:120
        },
        SignupText:{
          color:"green",
          fontSize:14,
          marginTop:40
        }

})

export default MonProfilScreen ;

