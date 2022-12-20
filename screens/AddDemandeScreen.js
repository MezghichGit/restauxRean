import {Text, TextInput, Button,SafeAreaView} from 'react-native';
import React, { useState} from "react";
import styles from '../styles';

 const AddDemandeScreen = ({ navigation }) =>{

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");

    //const dateDemande = Date.now();

    var currentdate = new Date();

    var datetime =  currentdate.getFullYear() + "-" +(currentdate.getMonth()+1)+"-"+currentdate.getDate()+" "+currentdate.getHours()+":"+currentdate.getMinutes() +":"+currentdate.getSeconds();


    let demande = {
        nom:nom,
        email:email,
        telephone:telephone,
        adresse:adresse,
        createdAt:datetime
    }

    const addDemandeData = ()=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(demande)
        };
        fetch('https://restaux.smart-it-partner.com/public/index.php/api/demandes', requestOptions)
            .then(response => {
                response.json();
                setTimeout(navigation.push('ListDemandes'),3000)
              })
    }

    return (
        <SafeAreaView>
            <Text style={styles.titreText}>Nouvelle Demande</Text>
            <Text>Nom : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setNom}
                value={nom}
            />
            <Text>Email: </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}

            />
            <Text>Téléphone : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setTelephone}
                value={telephone}

            />
            <Text>Adresse : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setAdresse}
                value={adresse}

            />
            <Button title="Ajouter" onPress={addDemandeData}></Button>
        </SafeAreaView>
    );
}


export default AddDemandeScreen;