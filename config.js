import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBRHFYvlsm4JYw9UCyJ7Cc-4aZbpFu4swk",
	authDomain: "c-71-f8d3c.firebaseapp.com",
	projectId: "c-71-f8d3c",
	storageBucket: "c-71-f8d3c.appspot.com",
	messagingSenderId: "993115017281",
	appId: "1:993115017281:web:6b60f78cd3a28a2354f6c0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
