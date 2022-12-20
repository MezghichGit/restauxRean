import React, { useState, useEffect } from "react";
import { Text, View, Button, SafeAreaView,ActivityIndicator } from 'react-native';

import styles from '../styles';

 const DetailsRestauScreen =({ navigation, route }) =>{

    const restauId = route.params.restauId;
    let [allRestauData, setAllRestauData] = useState({});
    let [fetchedState, setFetchedState] = useState(null);

    useEffect(() => {
        setFetchedState('loading...')
        setTimeout(() => getAllRestauData(), 300);
    }, [])

    const getAllRestauData = async () => {
        try {
           // const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
           console.log(restauId);
           const response = await fetch('https://restaux.smart-it-partner.com/public/index.php/api/restaurants/' + restauId);
           const data = await response.json();
           setAllRestauData(data)
            console.log(data);

        }
        catch (error) {
            console.log("Vérifier votre api...");
        }
        finally {
            setFetchedState(null);
        }
    }

    const deleteRestau =  (restauId) => {

        fetch('https://restaux.smart-it-partner.com/public/index.php/api/restaurants/' + restauId,{ method: 'DELETE' })
        .then((response) => {
         response.text();
         navigation.push('ListRestaux')
       })
       .then(
        //(result) => console.log(result)
       )
       .catch((error) => console.log(error));
     };
   

    return (
       

    <SafeAreaView style={styles.container}>
            {
                fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <View>
                   
                      <Text style={styles.titreText}>Détails Restau : {allRestauData.id}</Text>
                        <Text style={styles.titreText}>Nom : {allRestauData.nom}</Text>
                        <Text style={styles.titreText}>Adresse : {allRestauData.adresse}</Text>
                        <Text style={styles.titreText}>Tel : {allRestauData.telephone}</Text>
                        <Text style={styles.titreText}>Ville : {allRestauData.ville}</Text>
                        <Text style={styles.titreText}>Pays : {allRestauData.pays}</Text>
                        <Text style={styles.titreText}>Longitude : {allRestauData.longitude}</Text>
                        <Text style={styles.titreText}>Latitude : {allRestauData.latitude}</Text>
                    </View>
            }
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button  title="Supprimer" color="red" onPress={() => deleteRestau(allRestauData.id)} />
        </SafeAreaView>
    );
}

export default DetailsRestauScreen;

