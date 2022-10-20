import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCc8fAEzGyi7lnIhW8wfdB1hgBdGDTxiNA",
    authDomain: "netflix-clone-1e99a.firebaseapp.com",
    projectId: "netflix-clone-1e99a",
    storageBucket: "netflix-clone-1e99a.appspot.com",
    messagingSenderId: "142081986455",
    appId: "1:142081986455:web:9b5e8fc05d754947b97ed2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;