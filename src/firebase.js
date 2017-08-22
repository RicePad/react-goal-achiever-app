import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBAYnehvvfffkajOxmvB7ffGZBtziG1feI",
    authDomain: "goal-achiever-cd1d7.firebaseapp.com",
    databaseURL: "https://goal-achiever-cd1d7.firebaseio.com",
    projectId: "goal-achiever-cd1d7",
    storageBucket: "",
    messagingSenderId: "560663407354"
};


export const firebaseApp = firebase.initializeApp(config);