import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUiLHuKy0njsJ7raUVVUCqwmi1sq5FQGQ",
  authDomain: "where-s-waldo-d6fd3.firebaseapp.com",
  projectId: "where-s-waldo-d6fd3",
  storageBucket: "where-s-waldo-d6fd3.appspot.com",
  messagingSenderId: "920916556670",
  appId: "1:920916556670:web:ac33a7ad144489b464912f",
  measurementId: "G-KPSKP789S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Add a new document in collection "cities"
async function writeToFirestore() {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Montreal",
    state: "QC",
    country: "Canada",
  });
}

writeToFirestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
