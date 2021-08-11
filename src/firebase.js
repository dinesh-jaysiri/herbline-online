import * as firebase from 'firebase';


 const firebaseConfig = {
   apiKey: "AIzaSyAWKVRhy3pvggIVVmtt2rw_nDVHsQLcQ1c",
   authDomain: "herbline-online.firebaseapp.com",
   projectId: "herbline-online",
   storageBucket: "herbline-online.appspot.com",
   messagingSenderId: "710662867911",
   appId: "1:710662867911:web:996f747a9ee66a0a65a7e2",
   measurementId: "G-7B42HR60PJ",
 };

 firebase.initializeApp(firebaseConfig);
 firebase.analytics();