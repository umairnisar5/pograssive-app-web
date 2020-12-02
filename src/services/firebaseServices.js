import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHoaR7lYPLwyu0SL2N3Mp4mynuVgIj2Ls",
    authDomain: "notifactionpp.firebaseapp.com",
    databaseURL: "https://notifactionpp.firebaseio.com",
    projectId: "notifactionpp",
    storageBucket: "notifactionpp.appspot.com",
    messagingSenderId: "564411562482",
    appId: "1:564411562482:web:39c481d44467578206936b"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}