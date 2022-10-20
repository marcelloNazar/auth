import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBwvHMzbC5hwyb2sOl9GPTPiViHB5lVDsw",
    authDomain: "financeiroexpo-4af73.firebaseapp.com",
    projectId: "financeiroexpo-4af73",
    storageBucket: "financeiroexpo-4af73.appspot.com",
    messagingSenderId: "451712768760",
    appId: "1:451712768760:web:ce9982add589458a71390d",
    measurementId: "G-WXW7J11S6D"
  };
  
if(firebase.app.length === 0){
    const firebase = initializeApp(firebaseConfig);
}
export default firebase