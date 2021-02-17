import { Link } from "react-router-dom";

function Clicklist(props) {
  return (
    <Link to="/Song-List">
      <button className="list-button">Go to Song List</button>
    </Link>
  )
}

export default Clicklist