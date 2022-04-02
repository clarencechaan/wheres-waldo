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
import millisToMinutesAndSeconds from "../scripts/timeConversion";

let gameID;
let timer;

function Game() {
  const location = useLocation();
  const level = location.state;

  const [remainingKeys, setRemainingKeys] = useState(level.keys);
  const [gameOver, setGameOver] = useState(false);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState("0:00");

  useEffect(() => {
    cursor();
    gameID = uniqid();
    startTimer(gameID);
    const start = Date.now();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setCurrentTime(millisToMinutesAndSeconds(Date.now() - start), 1000);
    });

    return () => clearInterval(timer);

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    // win
    if (remainingKeys.length === 0) {
      console.log("You win.");
      getTime(gameID).then((result) => {
        setDuration(result.data);
        console.log(result.data);
        setCurrentTime(millisToMinutesAndSeconds(result.data));
      });
      setGameOver(() => true);
      clearInterval(timer);
    }
    // eslint-disable-next-line
  }, [remainingKeys]);

  const functions = getFunctions();
  connectFunctionsEmulator(functions, "localhost", 5001);
  const checkIfCoordsCorrect = httpsCallable(functions, "checkIfCoordsCorrect");
  const startTimer = httpsCallable(functions, "startTimer");
  const getTime = httpsCallable(functions, "getTime");

  function handleKeySelected(key) {
    console.log("key Selected");
    console.log(markerCoordsInPercent);

    const reqObj = {
      xPercent: markerCoordsInPercent.xPercent,
      yPercent: markerCoordsInPercent.yPercent,
      levelID: level.id,
      keyID: key.id,
    };

    checkIfCoordsCorrect(reqObj).then((result) => {
      const reqIsCorrect = result.data;
      console.log(reqIsCorrect);
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
      {gameOver ? <WinningPopup duration={duration} /> : null}
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
