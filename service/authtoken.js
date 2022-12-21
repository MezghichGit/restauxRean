import axios from "axios";
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from "jwt-decode";


function authentificate(newUser) {
    return axios
        .post("https://restaux.smart-it-partner.com/api/login_check", newUser)
       // .post("http://127.0.0.1:8000/api/login_check", newUser)
        .then(response => response.data.token)
        .then(token => {
            AsyncStorage.setItem('token', token);
            setaxiostoken(token);

            const jwtdata = jwtDecode(token);
            AsyncStorage.setItem('nom',jwtdata.nom);
            AsyncStorage.setItem('id',jwtdata.id);
            AsyncStorage.setItem('adresse',jwtdata.adresse);
            AsyncStorage.setItem('telephone',jwtdata.telephone);
            AsyncStorage.setItem('email',jwtdata.username);

            //Test de récupération des Restaurants
           // axios.get("http://127.0.0.1:8000/api/restaurants",)
             //   .then(response => console.log(response.data["hydra:member"], ""));
        });

}

function logout() {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('nom')
    AsyncStorage.removeItem('email')
    AsyncStorage.removeItem('adresse')
    AsyncStorage.removeItem('telephone')
    AsyncStorage.removeItem('id')
    AsyncStorage.removeItem('me')
    delete axios.defaults.headers['Authorization'];
}
const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            const jwtdata = jwtDecode(token);
            console.log(jwtdata.exp * 1000, new Date().getTime());
            if (jwtdata.exp * 1000 > new Date().getTime()) {
                setaxiostoken(token);
            }
            else {
                logout();
            }
        }
        else {
            logout();
        }
    } catch (error) {
        console.log(error);
    }
};

function setaxiostoken(token) {
    axios.defaults.headers['Authorization'] = 'Bearer ' + token
}

export default {
    authentificate, logout, getToken
};
