importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCHoaR7lYPLwyu0SL2N3Mp4mynuVgIj2Ls",
    authDomain: "notifactionpp.firebaseapp.com",
    databaseURL: "https://notifactionpp.firebaseio.com",
    projectId: "notifactionpp",
    storageBucket: "notifactionpp.appspot.com",
    messagingSenderId: "564411562482",
    appId: "1:564411562482:web:39c481d44467578206936b"
  };

  firebaseConfig.initializeApp(firebaseConfig);

  firebase.messaging();