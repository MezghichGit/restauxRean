import {Text, View,Button, TextInput} from 'react-native';
import styles from '../styles';
import React, { useState } from "react";
 const MessageScreen = ({navigation}) =>{
    const [message, onChangeMessage] = useState("");
    return (
        <View style={styles.container}>
            <Text>Merci d'envoyer votre message à PLB</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeMessage}
          placeholder="Taper votre message ici"
        />

            <Button title="Envoyer" onPress={()=>navigation.navigate('DetailsContact')}></Button>
        </View>
    );
}

export default MessageScreen;
