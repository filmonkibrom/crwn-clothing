import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDE5wYeE-ju_019823CpAJcM7BZokcsM5I",
    authDomain: "crwn-db-3511c.firebaseapp.com",
    databaseURL: "https://crwn-db-3511c.firebaseio.com",
    projectId: "crwn-db-3511c",
    storageBucket: "crwn-db-3511c.appspot.com",
    messagingSenderId: "145091561468",
    appId: "1:145091561468:web:3c4ca341daebc92c721479",
    measurementId: "G-4CLRNJ1HR1"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
      
    } return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
