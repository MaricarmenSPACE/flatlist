import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCOtmRflxV9gfBYF7ZFdSljOIYSwJkqySY",
    authDomain: "bibliotecadigital-b6c1d.firebaseapp.com",
    projectId: "bibliotecadigital-b6c1d",
    storageBucket: "bibliotecadigital-b6c1d.appspot.com",
    messagingSenderId: "744824754884",
    appId: "1:744824754884:web:3d8415272df48ffef86f91"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
