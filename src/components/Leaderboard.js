import NavBar from "./NavBar";
import LevelLeaderboard from "./LevelLeaderboard";
import "../styles/Leaderboard.css";
import levels from "../levels/levels";

function Leaderboard({ leaderboard }) {
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
