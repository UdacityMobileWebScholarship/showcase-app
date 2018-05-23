import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyBXtY4QjcMYPE0MbR4UwTMcvsOmw3ypMOY",
    authDomain: "showcase-dev-2bb35.firebaseapp.com",
    databaseURL: "https://showcase-dev-2bb35.firebaseio.com",
    projectId: "showcase-dev-2bb35",
    storageBucket: "showcase-dev-2bb35.appspot.com",
    messagingSenderId: "789404546997"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();