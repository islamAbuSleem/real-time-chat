import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkl-4MKcnD8ZbluIBXwAUOYVhG6L7emic",
  authDomain: "chat-d1831.firebaseapp.com",
  databaseURL: "https://chat-d1831.firebaseio.com",
  projectId: "chat-d1831",
  storageBucket: "chat-d1831.appspot.com",
  messagingSenderId: "625998954911",
  appId: "1:625998954911:web:7c8946e5d7c75060dc3daa"
};

// exporting firestore database
export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());
