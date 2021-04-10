import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtUyjy9hdaVbHcO9zxuBytzrVBDTvF88I",
    authDomain: "cart-e5b63.firebaseapp.com",
    projectId: "cart-e5b63",
    storageBucket: "cart-e5b63.appspot.com",
    messagingSenderId: "661330174722",
    appId: "1:661330174722:web:731c320081ce861d25d81b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <App />,  document.getElementById('root')
);

