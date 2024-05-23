import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-yGWjxCwDKSlxBRm97XmjjmzJhv1wDmw',
  authDomain: 'remind-me-76b5b.firebaseapp.com',
  databaseURL: 'https://remind-me-76b5b.firebaseio.com',
  projectId: 'remind-me-76b5b',
  storageBucket: 'remind-me-76b5b.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:450967273921:android:f2f4ccb1d4a2f7ef3bef40',
  measurementId: 'G-measurement-id',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
