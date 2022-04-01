/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAUiLHuKy0njsJ7raUVVUCqwmi1sq5FQGQ",
  authDomain: "where-s-waldo-d6fd3.firebaseapp.com",
  projectId: "where-s-waldo-d6fd3",
  storageBucket: "where-s-waldo-d6fd3.appspot.com",
  messagingSenderId: "920916556670",
  appId: "1:920916556670:web:ac33a7ad144489b464912f",
  measurementId: "G-KPSKP789S4",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
