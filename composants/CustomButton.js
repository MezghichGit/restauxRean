import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable 
     onPress={onPress}
     style={[styles.container, styles[`container_${type}`]]}>

      <Text
      style={[styles.Text, styles[`text_${type}`]]}>
      {text}
      </Text>

    </Pressable>
  )
}
const styles = StyleSheet.create({

    container: {       

        width: '100%',
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
      },

    container_PRIMARY: {

      backgroundColor: '#7dba21',
      borderRadius: 17,

    },  container_Pharma: {

      backgroundColor: 'black',
      borderRadius: 10,
      width:250

    },
    
    
    container_TERTIARY: {
      marginVertical: 0,
      color:'green'
    },

    container_TERTIARY_1: {
      marginVertical: 100,
      color:'green'

    }, 
     container_TERTIARY_0: {
      marginVertical: 0,
      color:'green'
    },

    container_TERTIARY_2: {
      marginVertical:80

    },

    container_SECONDARY: {
      borderColor: '#3B71F3',
      borderWidth: 2,

    },
    
    text_TERTIARY_0: {
      color: 'gray',
      fontSize: 10,
      marginLeft:220
      },
    text_TERTIARY: {
    color: 'gray',
    
    },

   
    text_TERTIARY_2: {
        color: '#607B60'
        
      },
      text_Pharma: {
        color: 'white'
        
      },
      text_TERTIARY_1: {
        color: '#607B60'
        
      },

    text_SECONDARY: {
      color: '#3B71F3',
    },
    
    Text: {
      fontWeight: 'bold',
      color: 'white',
    }

});

export default CustomButton ;
