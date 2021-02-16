import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Barbacide</Link>
      <Link to="/Song-List">Song List</Link>
      <Link to="/new">Add A Song</Link>
    </nav>
  )
}

export default Nav