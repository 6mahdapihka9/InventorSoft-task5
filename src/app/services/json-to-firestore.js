
const firebaseConfig = {
  apiKey: 'AIzaSyApXsXMQttrXFjmttbuxcjJLcmN4kQnQDo',
  authDomain: 'angular-task5.firebaseapp.com',
  databaseURL: 'https://angular-task5.firebaseio.com',
  projectId: 'angular-task5',
  storageBucket: 'angular-task5.appspot.com',
  messagingSenderId: '552975023552',
  appId: '1:552975023552:web:008a5a12302addf22d1c25'
};
const albums = require('./albums.json');
const firebase = require('firebase');

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
    db.collection("albums")
        .add({
            name: obj.name,
            band: obj.band,
            genre: obj.genre,
            label: obj.label,
            producer: obj.producer,
            releaseDate: new Date(obj.releaseDate)
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});


