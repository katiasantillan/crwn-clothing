import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmVROuh1grOBy41lfk9XHTVo_v397yz-0",
    authDomain: "crwn-db-4e742.firebaseapp.com",
    databaseURL: "https://crwn-db-4e742.firebaseio.com",
    projectId: "crwn-db-4e742",
    storageBucket: "crwn-db-4e742.appspot.com",
    messagingSenderId: "2344610664",
    appId: "1:2344610664:web:4727c03ded5937ee5204dd",
    measurementId: "G-0BMW25CBZN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//To trigger the Google pop-up
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;