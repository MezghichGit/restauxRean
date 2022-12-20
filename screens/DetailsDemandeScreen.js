import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Button, SafeAreaView,ActivityIndicator } from 'react-native';
import styles from '../styles';

 const DetailsDemandeScreen =({ navigation, route }) =>{

    const demandeId = route.params.demandeId;
    let [allDemandeData, setAllDemandeData] = useState({});
    let [fetchedState, setFetchedState] = useState(null);

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");


  

    const getAllDemandeData = async () => {
        try {
           // const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
          // console.log(demandeId);
           const response = await fetch('https://restaux.smart-it-partner.com/public/index.php/api/demandes/' + demandeId);
           const data = await response.json();
           setAllDemandeData(data)
           setNom(data.nom);
           setEmail(data.email);
           setTelephone(data.telephone);
           setAdresse(data.adresse);
          // console.log(nom+" "+email+" "+telephone+" "+adresse);

        }
        catch (error) {
            console.log("Vérifier votre api...");
        }
        finally {
            setFetchedState(null);
        }
    }



var currentdate = new Date();

    var datetime =  currentdate.getFullYear() + "-" +(currentdate.getMonth()+1)+"-"+currentdate.getDate()+" "+currentdate.getHours()+":"+currentdate.getMinutes() +":"+currentdate.getSeconds();


    let demande = {
        nom:nom,
        email:email,
        telephone:telephone,
        adresse:adresse,
        createdAt:datetime
    }

    const updateDemandeData = ()=> {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(demande)
        };
        fetch('https://restaux.smart-it-partner.com/public/index.php/api/demandes/'+demandeId, requestOptions)
            .then(response => {
                response.json();
                setTimeout(navigation.push('ListDemandes'),3000)
              })
    }


    useEffect(() => {
        setFetchedState('loading...')
        setTimeout(() => getAllDemandeData(), 300);
    }, [])


    return (
         <SafeAreaView>


            <Text style={styles.titreText}>Mise à jour d'une demande</Text>
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
            <Button title="Mettre à jour" onPress={updateDemandeData}></Button>
            <Button title="Liste Demandes" onPress={()=>navigation.navigate('ListDemandes')}></Button>
           
        </SafeAreaView>  
            
        );
}

export default DetailsDemandeScreen;
