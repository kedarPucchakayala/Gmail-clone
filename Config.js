import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3Q_nTBGcyGgxTA7NQQdWK6787ST2Iv8o",
    authDomain: "auth-c960b.firebaseapp.com",
    projectId: "auth-c960b",
    storageBucket: "auth-c960b.appspot.com",
    messagingSenderId: "752726217685",
    appId: "1:752726217685:web:3783ac3dc4325bff8ce35c",
    measurementId: "G-DTVGYKPPXL"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { app, auth };