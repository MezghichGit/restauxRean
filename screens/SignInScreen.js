import React, {useState} from 'react';
import { View, Image, StyleSheet,useWindowDimensions , ScrollView,TouchableOpacity ,Text } from 'react-native';
import CustomInput from '../composants/CustomInput';
import CustomButton from '../composants/CustomButton';
import { useNavigation } from '@react-navigation/native';
import authtoken from "../service/authtoken";
const SignInScreen = () => {
    const [username, setUsername] = useState('') ;
    const [password, setPassword] = useState('') ;
    const {height} = useWindowDimensions();
    const navigation = useNavigation ();

    let newUser = {
      username:username,
      password:password,
  }
      const OnSignInPressed = async() => {
        console.log(newUser);
        try{
  
            await authtoken.authentificate(newUser);
            navigation.navigate('Dashboard');
        }
        catch(error){
            console.log("invalid credentials");
        }
  
      
    };
  
  

    const OnForgotPasswordPressed =() => {

      //navigation.navigate('Forgotpassword');

  };
    const OnSignUpPressed =() => {
      navigation.navigate('Signup');

};

 
  return (

 //<ScrollView showsVerticalScrollIndicator={false}>  

  <View style={styles.root}>

    <Image 
     source={{'uri':'https://www.plb-consulting.com/wp-content/uploads/2015/05/logo.png'}}
     style={[styles.logo, {height:height*0.3}]} 
     resizeMode="contain" />

 <Text style={styles.title}>Connectez-vous à votre compte</Text>
    <CustomInput
    placeholder="Adresse Email"
    value={username}
    setValue={setUsername}
     />

    <CustomInput
    placeholder="Mot de passe"
    value={password}
    setValue={setPassword}
    secureTextEntry={true}
      />

<CustomButton 
    text="Mot de passe oublié?"
    onPress={OnForgotPasswordPressed}
    type="TERTIARY_0"
    />
    <CustomButton 
    text="Connexion"
    onPress={OnSignInPressed}
    type="PRIMARY"
    />



<TouchableOpacity >
<Text style={styles.NormalText}  >Vous n'avez pas de compte?  <Text style={styles.SignupText}  onPress={OnSignUpPressed}>Inscrivez-vous</Text></Text>
        </TouchableOpacity>

         <TouchableOpacity >
          <Text style={styles.FooterText}>© 2022 Copyright - PLB</Text>
        </TouchableOpacity>
  </View>

  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,
        backgroundColor:'#EEF9EE'
    
    },
    

    title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    margin: 25,
    marginTop:0
    
    },
    logo: {
      width: 300,
      height:50,
      maxWidth: 400,
      maxHeight:100,
      marginBottom: 20,
      marginTop: 80

    },

NormalText:{
  color:"gray",
  fontSize:14,
  marginTop:40
},
    
    FooterText:{
      color:"gray",
      fontSize:12,
      marginTop:170
    },
    SignupText:{
      color:"green",
      fontSize:14,
      marginTop:40
    }

})

export default SignInScreen ;
