import "./styles/App.css";
import levels from "./levels/levels";
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config.js";
import { useEffect, useState } from "react";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

function App() {
  const [username, setUsername] = useState("Anonymous");

  const functions = getFunctions();
  connectFunctionsEmulator(functions, "localhost", 5001);
  const fillDefaultLeaderboard = httpsCallable(
    functions,
    "fillDefaultLeaderboard"
  );

  // useEffect(() => {
  //   fillDefaultLeaderboard();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home levels={levels} />} />
        <Route
          path="/game"
          element={<Game username={username} setUsername={setUsername} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
