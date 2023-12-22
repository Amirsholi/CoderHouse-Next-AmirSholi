
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhp1FtJnxZoisK4UdVexRh9clmj8bNPp0",
  authDomain: "coderhouse-react-amirsholi.firebaseapp.com",
  projectId: "coderhouse-react-amirsholi",
  storageBucket: "coderhouse-react-amirsholi.appspot.com",
  messagingSenderId: "115840064915",
  appId: "1:115840064915:web:f1abe57cf2f8dcd49e5c66"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);