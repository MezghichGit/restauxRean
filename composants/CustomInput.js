import React from "react";
import { View, StyleSheet, TextInput ,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  

    return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
          />
    </View>
  
    );
  };
  
  
  const styles = StyleSheet.create({

    container: {
      backgroundColor:'white',
      width:'100%',
      height:'6%',
      borderColor:'#e8e8e8',
      borderWidth:1,
      borderRadius:5,
      paddingHorizontal:10,
      marginVertical:10,
  },
    input: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  
  
  export default CustomInput ;
