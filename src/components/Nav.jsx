import { Link } from "react-router-dom";
import img1 from "../Images/Barbacidelogo.png";

function Nav() {
  return (
    <nav>
      <Link id="logo-container" to="/">
        <img
          style={{ height: "100%" }}
          id="logo"
          src={img1}
          alt="Barbacide"
        />
      </Link>
      <div className="nav-links">
        <Link id="song-list" className="nav-link" to="/song-list">
          Song List
        </Link>
        <Link id="add-a-song" className="nav-link" to="/new">
          Add A Song
        </Link>
        <Link id="delete-a-song" className="nav-link" to="/song-list/delete">
          Delete A Song
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
