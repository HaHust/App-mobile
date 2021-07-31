import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDbGHSW519DFxhyEEasv-yRD_lWWIyC418",
    authDomain: "cdivietnam.firebaseapp.com",
    projectId: "cdivietnam",
    storageBucket: "cdivietnam.appspot.com",
    messagingSenderId: "665075499036",
    appId: "1:665075499036:web:b91b9d871ae7f2866bdfd9",
    measurementId: "G-K8MBXY0LEC"
  };
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase