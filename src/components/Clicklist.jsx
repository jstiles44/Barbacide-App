import { Link } from "react-router-dom";

function ClickList(props) {
  return (
    <Link to="/song-list">
      <button className="list-button">Go to Song List</button>
    </Link>
  )
}

export default ClickList