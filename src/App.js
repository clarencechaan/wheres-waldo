import "./styles/App.css";
import cursor from "./cursor";
import levels from "./levels/levels";
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebase-config.js";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

const db = getFirestore();
// Add a new document in collection "cities"
async function writeToFirestore() {
  await setDoc(doc(db, "cities", "LA"), {
    name: "New York City",
    state: "NY",
    country: "USA",
  });
}
writeToFirestore();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home levels={levels} />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
