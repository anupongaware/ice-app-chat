import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAzauT27xZ9zLO_w9-ToUGwBNOqXOBAibg",
    authDomain: "ice-chat-webapp.firebaseapp.com",
    databaseURL: "https://ice-chat-webapp-default-rtdb.firebaseio.com",
    projectId: "ice-chat-webapp",
    storageBucket: "ice-chat-webapp.appspot.com",
    messagingSenderId: "361914311388",
    appId: "1:361914311388:web:0ae8208f6489774ad68a19"
  };

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

  