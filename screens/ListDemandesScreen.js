
import React, { useState, useEffect } from "react";
import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from '../styles';

/***** Composant Flat ListItem */
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>id : {item.id}</Text>
        <Text style={[styles.title, textColor]}>Nom : {item.nom}</Text>
        <Text style={[styles.title, textColor]}>Email : {item.email}</Text>
        <Text style={[styles.title, textColor]}>Téléphone: {item.telephone}</Text>
        <Text style={[styles.title, textColor]}>Adresse: {item.adresse}</Text>
        <Text style={[styles.title, textColor]}>Date {item.createdAt}</Text>
    </TouchableOpacity>
);
/******* Fin du FlatList */


 const ListDemandesScreen = ({ navigation }) =>{

    const [selectedId, setSelectedId] = useState(null);
    const [demandes, setDemandes] = useState([]);
    const [fetchedState, setFetchedState] = useState(null);

    useEffect(
        () => {
            setFetchedState('Loading');
            setTimeout(() => getData(), 1000);
        }, []
    );
    const getData = async () => {
        //const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('https://restaux.smart-it-partner.com/public/index.php/api/demandes')
        const data = await response.json()
        setDemandes(data['hydra:member'])
        setFetchedState(null);
        console.log(data)
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id)
                    navigation.navigate('DetailsDemande', { demandeId: item.id })
                }
                }
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    return (
        <SafeAreaView style={styles.container}>
           
        <Text style={styles.titreText}>List Demandes</Text>
            {
                fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <FlatList
                        data={demandes}
                        renderItem={renderItem}
                    />
            }

<Button title="Add Demande" onPress={()=>navigation.navigate('AddDemande')}></Button>
        </SafeAreaView>
        );
}

export default ListDemandesScreen;
