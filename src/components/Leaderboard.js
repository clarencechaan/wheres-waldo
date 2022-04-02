/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import LevelLeaderboard from "./LevelLeaderboard";
import "../styles/Leaderboard.css";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";
import { useEffect, useState } from "react";
import levels from "../levels/levels";

function Leaderboard() {
  const functions = getFunctions();
  // connectFunctionsEmulator(functions, "localhost", 5001);
  const getLeaderboard = httpsCallable(functions, "getLeaderboard");

  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboard().then((result) => {
      const leaderboardArr = result.data;
      leaderboardArr.sort((a, b) => (a.duration < b.duration ? -1 : 1));
      let leaderboardObj = {};
      for (const entry of leaderboardArr) {
        const arrAtLevelID = leaderboardObj[entry.levelID]
          ? leaderboardObj[entry.levelID]
          : [];
        leaderboardObj = {
          ...leaderboardObj,
          [entry.levelID]: [...arrAtLevelID, entry],
        };
      }
      setLeaderboard(leaderboardArr);
    });
  }, []);

  return (
    <div className="Leaderboard">
      <NavBar />
      <div className="leaderboard-content">
        <div className="leaderboard-title">Leaderboard</div>
        <div className="level-leaderboards-container">
          {levels.map((level) => {
            const levelEntries = leaderboard.filter(
              (entry) => entry.levelID === level.id
            );
            return (
              <LevelLeaderboard
                levelID={level.id}
                entries={levelEntries}
                key={level.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
