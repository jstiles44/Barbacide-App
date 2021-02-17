import { Link } from "react-router-dom";

function Clickadd(props) {
  return (
    <Link to="/new">
      <button className="add-button">Add A Song</button>
    </Link>
  )
}

export default Clickadd