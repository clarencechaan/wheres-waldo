import { Link } from "react-router-dom";

function LevelPreview({ level }) {
  return (
    <div>
      <Link to="/game" state={level}>
        <img src={level.imgURL} alt="" className="level-preview-img" />
      </Link>
      <h3 className="level-preview-title">{level.title}</h3>
    </div>
  );
}

export default LevelPreview;
