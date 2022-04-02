import levels from "../levels/levels";
import {
  millisToMinutesAndSeconds,
  millisToDateString,
} from "../scripts/timeConversion";
import { Link } from "react-router-dom";

function LevelLeaderboard({ levelID, entries }) {
  const level = levels.find((level) => level.id === levelID);
  return (
    <div className="level-leaderboard">
      <div className="level-leaderboard-entries">
        <div className="level-leaderboard-title-header">
          <div className="level-leaderboard-title">{level.title}</div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
            {entries.map((entry, idx) => {
              return (
                <tr key={idx}>
                  <td>#{idx + 1}</td>
                  <td>{entry.username}</td>
                  <td>{millisToMinutesAndSeconds(entry.duration)}</td>
                  <td>{millisToDateString(entry.start)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="level-leaderboard-img-container">
        <Link to="/game" state={level}>
          <img src={level.imgURL} alt="" className="level-leaderboard-img" />
        </Link>
      </div>
    </div>
  );
}

export default LevelLeaderboard;
