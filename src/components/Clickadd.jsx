import { Link } from "react-router-dom";

function ClickAdd(props) {
  return (
    <Link to="/new">
      <button className="add-button">Add A Song</button>
    </Link>
  )
}

export default ClickAdd