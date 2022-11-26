import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDICkfjkw-qQO7FJkli3Q2c8-5jXkA6Xzo",
    authDomain: "restaurantapp-9edef.firebaseapp.com",
    databaseURL: "https://restaurantapp-9edef-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-9edef",
    storageBucket: "restaurantapp-9edef.appspot.com",
    messagingSenderId: "338171077334",
    appId: "1:338171077334:web:02a01ef6a79e1850139f77"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const fireStore = getFirestore(app);
  const storage = getStorage(app);
  export {app, fireStore, storage}