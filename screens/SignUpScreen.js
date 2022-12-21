import React, {useState} from 'react';
import { View,StyleSheet,Text, ScrollView,TouchableOpacity ,Image,useWindowDimensions} from 'react-native';
import CustomInput from '../composants/CustomInput';
import CustomButton from '../composants/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.png'
const SignUpScreen = () => {
    const [nom, setNom] = useState('') ;
    const [prenom, setPrenom] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const {height} = useWindowDimensions();
const navigation = useNavigation ();

const OnSignInPressed =() => {
    navigation.navigate('Signin');

};

const OnRegisterPressed = () => {
    //navigation.navigate('Confirmemail');
    console.log("Register pressed");
  };

  return (

  <View style={styles.root}>
  <Image 
     source={{'uri':'https://www.plb-consulting.com/wp-content/uploads/2015/05/logo.png'}}
     style={[styles.logo, {height:height*0.3}]} 
     resizeMode="contain" />
    <Text style={styles.title}>Créer un compte</Text>

    <CustomInput
    placeholder="Nom"
    value={nom}
    setValue={setNom}
     />
       <CustomInput
    placeholder="Prénom"
    value={prenom}
    setValue={prenom}
     />

    <CustomInput
    placeholder="Adresse Email"
    value={email}
    setValue={setEmail}
     />

    <CustomInput
    placeholder="Mot de passe"
    value={password}
    setValue={setPassword}
    secureTextEntry={true}
      />
  

    <CustomButton 
    text="S'inscrire"
    onPress={OnRegisterPressed}
    type="PRIMARY"
    />


<TouchableOpacity >
<Text style={styles.NormalText}  >Déjà membre? <Text style={styles.SignupText}  onPress={OnSignInPressed}>Connectez-vous</Text></Text>
        </TouchableOpacity>
   <TouchableOpacity>
          <Text style={styles.FooterText}>© 2022 Copyright - PLB</Text>
        </TouchableOpacity>
  {/* <CustomButton 
    text="Sign In with Facebook"
    onPress={OnSignInFacebook}
    type="PRIMARY"
    />

  <CustomButton 
    text="Sign In with google"
    onPress={OnSignInGoogle}
    type="PRIMARY"
    /> */}

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

export default SignUpScreen ;
