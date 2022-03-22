import Rebase from "re-base";
import firebase from "firebase/app";
require('firebase/database');

//создали базу данных.указал все свойства для связи с базой данных firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIl84324du8blrXayE_je0bitgNC2escY",
    authDomain: "very-hot-burgers-47ba0.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-47ba0-default-rtdb.firebaseio.com",
});

//создал необходимую связку с реактом
const base = Rebase.createClass(firebaseApp.database()); 

export {firebaseApp};
export default base;