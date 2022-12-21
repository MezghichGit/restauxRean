import React, { useState, useEffect } from "react";
import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import authtoken from "../service/authtoken";
import axios from "axios";
import styles from '../styles';



/***** Composant Flat ListItem */
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>Numéro du restau : {item.id}</Text>
        <Text style={[styles.title, textColor]}>Nom : {item.nom}</Text>
        <Text style={[styles.title, textColor]}>Adresse : {item.adresse}</Text>
        <Text style={[styles.title, textColor]}>Ville : {item.ville}</Text>
    </TouchableOpacity>
);
/******* Fin du FlatList */



 const ListRestauxScreen = ({ navigation }) =>{

    const [selectedId, setSelectedId] = useState(null);
    const [restaux, setRestaux] = useState([]);
    const [fetchedState, setFetchedState] = useState(null);

    useEffect(
        () => {
            setFetchedState('Loading');
            setTimeout(() => getData(), 1000);
            authtoken.getToken();
        }, []
    );
    const getData = async () => {
        /*
        //const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('https://restaux.smart-it-partner.com/public/index.php/api/restaurants');
        //const response = await fetch('http://127.0.0.1:8000/api/restaurants');
        const data = await response.json()
        setRestaux(data['hydra:member'])
        setFetchedState(null);
        console.log(data)*/
        const response = await axios.get("https://restaux.smart-it-partner.com/public/index.php/api/restaurants")
        .then(response=>response.data["hydra:member"])
        
        setRestaux(response)
        setFetchedState(null);
        console.log(response)

    }

        /////
        const renderItem = ({ item }) => {
            const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
            const color = item.id === selectedId ? 'white' : 'black';
    
            return (
                <Item
                    item={item}
                    onPress={() => {
                        setSelectedId(item.id)
                        //console.log(item.id)
                        navigation.navigate('DetailsRestau', { restauId: item.id })
                    }
                    }
                    backgroundColor={{ backgroundColor }}
                    textColor={{ color }}
                />
            );
        };
    
        return (
    
            <SafeAreaView style={styles.container}>
                <Text style={styles.titreText}>List RestauxScreen</Text>
                    {
                        fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
                            <FlatList
                                data={restaux}
                                renderItem={renderItem}
                            />
                    }
                </SafeAreaView>
                );
        
}

export default ListRestauxScreen;
