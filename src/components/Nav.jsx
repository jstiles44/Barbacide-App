import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link id="logo-container" to="/">
        <img
          style={{ height: "100%" }}
          id="logo"
          src={`https://photos.smugmug.com/photos/i-rRWr4zB/0/899e3c59/S/i-rRWr4zB-S.png`}
        />
      </Link>
      <div className="nav-links">
        <Link id="song-list" className="nav-link" to="/Song-List">
          Song List
        </Link>
        <Link id="add-a-song" className="nav-link" to="/new">
          Add A Song
        </Link>
        <Link id="delete-a-song" className="nav-link" to="/Song-List/Delete">
          Delete A Song
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
