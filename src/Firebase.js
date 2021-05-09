import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDMhAF96AZo-0LIvSOj4KdAiNrfZo4WBs4',
  authDomain: 'facebook-clone-a8b2a.firebaseapp.com',
  databaseURL: 'https://facebook-clone-a8b2a.firebaseio.com',
  projectId: 'facebook-clone-a8b2a',
  storageBucket: 'facebook-clone-a8b2a.appspot.com',
  messagingSenderId: '912044779790',
  appId: '1:912044779790:web:144846eb441ed66c8a0f5f',
  measurementId: 'G-R67KTJTJYC',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;