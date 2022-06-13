import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw4Uz9SAao1SguR5tOCTaOlFFg6f2MV0I",
    authDomain: "mydiary-db-d479a.firebaseapp.com",
    projectId: "mydiary-db-d479a",
    storageBucket: "mydiary-db-d479a.appspot.com",
    messagingSenderId: "688711934769",
    appId: "1:688711934769:web:6a60d8339a306e0cd20610"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
