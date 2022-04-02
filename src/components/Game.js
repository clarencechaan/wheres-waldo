/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Game.css";
import GameNavBar from "./GameNavBar";
import WinningPopup from "./WinningPopup";
import { cursor, markerCoordsInPercent } from "../scripts/cursor";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";
import uniqid from "uniqid";
import { millisToMinutesAndSeconds } from "../scripts/timeConversion";

let gameID;
let timer;

function Game({ username, setUsername }) {
  const location = useLocation();
  const level = location.state;

  const [remainingKeys, setRemainingKeys] = useState(level.keys);
  const [gameOver, setGameOver] = useState(false);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState("0:00");
  const [rank, setRank] = useState(null);

  const functions = getFunctions();
  // connectFunctionsEmulator(functions, "localhost", 5001);
  const checkIfCoordsCorrect = httpsCallable(functions, "checkIfCoordsCorrect");
  const startTimer = httpsCallable(functions, "startTimer");
  const getTime = httpsCallable(functions, "getTime");
  const getLeaderboard = httpsCallable(functions, "getLeaderboard");

  useEffect(() => {
    cursor();
    gameID = uniqid();
    startTimer({ gameID, levelID: level.id });
    const start = Date.now();
    timer = setInterval(() => {
      setCurrentTime(millisToMinutesAndSeconds(Date.now() - start), 1000);
    });
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    // win
    if (remainingKeys.length === 0) {
      getTime(gameID).then((result) => {
        const duration = result.data;
        setDuration(duration);
        setCurrentTime(millisToMinutesAndSeconds(duration));
        return getLeaderboard().then((result) => {
          const leaderboardArr = result.data;
          const levelLeaderboard = leaderboardArr.filter(
            (entry) => entry.levelID === level.id
          );
          levelLeaderboard.sort((a, b) => (a.duration < b.duration ? -1 : 1));
          let rank = levelLeaderboard.length + 1;
          for (let i = 0; i < levelLeaderboard.length; i++) {
            if (duration < levelLeaderboard[i].duration) {
              rank = i + 1;
              break;
            }
          }
          setRank(rank);
        });
      });
      setGameOver(() => true);
      clearInterval(timer);
    }
  }, [remainingKeys]);

  function handleKeySelected(key) {
    const reqObj = {
      xPercent: markerCoordsInPercent.xPercent,
      yPercent: markerCoordsInPercent.yPercent,
      levelID: level.id,
      keyID: key.id,
    };

    checkIfCoordsCorrect(reqObj).then((result) => {
      const reqIsCorrect = result.data;
      if (reqIsCorrect) {
        setRemainingKeys((prevRemainingKeys) => {
          const index = prevRemainingKeys.indexOf(key);
          return [
            ...prevRemainingKeys.slice(0, index),
            ...prevRemainingKeys.slice(index + 1),
          ];
        });
      }
    });
  }

  return (
    <div className="Game">
      {gameOver ? (
        <WinningPopup
          duration={duration}
          username={username}
          setUsername={setUsername}
          gameID={gameID}
          rank={rank}
        />
      ) : null}
      <GameNavBar
        level={level}
        remainingKeys={remainingKeys}
        currentTime={currentTime}
      />
      <div className="game-content">
        <span className="circle"></span>
        <span className="marker" hidden></span>
        <span className="key-dropdown" hidden>
          <div className="keys-container">
            {remainingKeys.map((key) => {
              return (
                <button
                  className="key-btn"
                  key={key.id}
                  onClick={() => {
                    handleKeySelected(key);
                  }}
                >
                  {key.title}
                </button>
              );
            })}
          </div>
        </span>
        <img src={level.imgURL} alt="" className="game-level-img" />
      </div>
    </div>
  );
}

export default Game;
