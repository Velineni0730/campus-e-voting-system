// Firebase config (replace with your actual Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyDQ2xaXObqHMTH8ViThJO_D80tbo-8ue7U",
  authDomain: "CampusE-Voting.firebaseapp.com",
  projectId: "campuse-voting-c6399",
  storageBucket: "campuse-voting-c6399.appspot.com",
  messagingSenderId: "832644090079",
  appId: "1:832644090079:web:305ca6b8859746605b416a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();