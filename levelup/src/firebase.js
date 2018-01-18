import firebase from 'firebase';
    // Initialize Firebase
    const config = {
        apiKey: "Your-API-Key",
           authDomain: "your-project-id.firebaseapp.com",
           databaseURL: "https://your-project-id.firebaseio.com",
           projectId: "your-project-id",
           storageBucket: "your-project-id.appspot.com",
           messagingSenderId: "sender-id"
        };
        firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
