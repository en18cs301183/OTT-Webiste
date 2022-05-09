import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBbbmwayJiOnr--mnQ66S2Ut0ZP1ipsJVE",
    authDomain: "bingepix-aaa56.firebaseapp.com",
    projectId: "bingepix-aaa56",
    storageBucket: "bingepix-aaa56.appspot.com",
    messagingSenderId: "479888744737",
    appId: "1:479888744737:web:b81d69dd66ef91fdc25e60"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;