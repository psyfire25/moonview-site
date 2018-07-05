import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-uFBa63GfWVfNtZ1rOL83yvtsNZ4OMEw",
    authDomain: "moonview-b1185.firebaseapp.com",
    databaseURL: "https://moonview-b1185.firebaseio.com",
    projectId: "moonview-b1185",
    storageBucket: "moonview-b1185.appspot.com",
    messagingSenderId: "733077307540"
  };
  firebase.initializeApp(config);
  export default firebase;
