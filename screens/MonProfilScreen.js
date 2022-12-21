
import React, {useState,useEffect} from 'react';
import { View,StyleSheet,Text, ScrollView,TouchableOpacity ,Image,useWindowDimensions} from 'react-native';
import CustomInput from '../composants/CustomInput';
import CustomButton from '../composants/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const MonProfilScreen = () => {
    const [nom, setNom] = useState('') ;
    const [email, setEmail] = useState('') ;
    const {height} = useWindowDimensions();
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [id, setId] = useState(0);

const navigation = useNavigation ();


useEffect(() => {
  setTimeout(() => getUserProfil(), 1000);
}, []);

const getUserProfil = async () => {
  //wait authtoken.getToken();
  const nom = await AsyncStorage.getItem("nom");
  const email = await AsyncStorage.getItem("email");
  const telephone = await AsyncStorage.getItem("telephone");
  const adresse = await AsyncStorage.getItem("adresse");
  const id = await AsyncStorage.getItem("id");
  setNom(nom);
  setTelephone(telephone);
  setAdresse(adresse);
  setEmail(email);
  setId(id);
};

  const OnUpdateProfilPressed = async () => {
    const data = {
      telephone: telephone,
      adresse: adresse,
    };
    try {
      await axios.put(
        `https://restaux.smart-it-partner.com/public/index.php/api/users/${id}`,
        data
      );
     navigation.navigate("PLB");
    } catch (err) {
      console.log(err);
    }
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
    placeholder=""
    value={nom}
    setValue={setNom}
     />
      

    <CustomInput
    placeholder=""
    value={email}
    setValue={setEmail}
     />

    <CustomInput
    placeholder=""
    value={telephone}
    setValue={setTelephone}
    
      />
   <CustomInput
    placeholder=""
    value={adresse}
    setValue={setAdresse}
  
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

