// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFK_R4mcQr091jVf1tM8Gw0aHgIXuXZBw",
    authDomain: "newproject-7128e.firebaseapp.com",
    projectId: "newproject-7128e",
    storageBucket: "newproject-7128e.appspot.com",
    messagingSenderId: "121233884521",
    appId: "1:121233884521:web:e8da32dfdd0713ed6c29f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();



/*
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
 }else{
    app = firebase.app()
}

const auth = firebase.auth();

export { auth }
 */




