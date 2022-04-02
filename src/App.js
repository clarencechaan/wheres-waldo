/* eslint-disable react-hooks/exhaustive-deps */
import "./styles/App.css";
import levels from "./levels/levels";
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config.js";
import { useState, useEffect } from "react";
import {
  getFunctions,
  httpsCallable,
  // connectFunctionsEmulator,
} from "firebase/functions";

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

function App() {
  const [username, setUsername] = useState("Anonymous");
  const [leaderboard, setLeaderboard] = useState([]);

  const functions = getFunctions();
  // connectFunctionsEmulator(functions, "localhost", 5001);
  const checkIfCoordsCorrect = httpsCallable(functions, "checkIfCoordsCorrect");
  const startTimer = httpsCallable(functions, "startTimer");
  const getTime = httpsCallable(functions, "getTime");
  const getLeaderboard = httpsCallable(functions, "getLeaderboard");
  const writeUsername = httpsCallable(functions, "writeUsername");

  const funcs = {
    checkIfCoordsCorrect,
    startTimer,
    getTime,
    getLeaderboard,
    writeUsername,
  };

  useEffect(() => {
    getLeaderboard().then((result) => {
      const leaderboardArr = result.data;
      leaderboardArr.sort((a, b) => (a.duration < b.duration ? -1 : 1));
      setLeaderboard(leaderboardArr);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home levels={levels} />} />
        <Route
          path="/game"
          element={
            <Game
              username={username}
              setUsername={setUsername}
              funcs={funcs}
              leaderboard={leaderboard}
              setLeaderboard={setLeaderboard}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard funcs={funcs} leaderboard={leaderboard} />}
        />
      </Routes>
    </div>
  );
}

export default App;
