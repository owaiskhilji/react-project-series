import { initializeApp } from "firebase/app";
import { getFirestore ,collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASVTn7ZzBXpcDZU958hfm5KMneo25ZmV0",
  authDomain: "new-project-6051f.firebaseapp.com",
  projectId: "new-project-6051f",
  storageBucket: "new-project-6051f.appspot.com",
  messagingSenderId: "1009703413919",
  appId: "1:1009703413919:web:0968e145adf05ac4631aaa",
  measurementId: "G-V7WBJEJ9WX"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export{
    collection,
    addDoc
}

