import firebase from 'firebase';
    // Initialize Firebase
    const config = {

        firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;