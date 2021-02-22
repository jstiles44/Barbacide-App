import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ClickDelete(props) {
  return (
    <Link to="/song-list/delete">
      <Button className="delete-button" variant="secondary" size="lg">Delete A Song</Button>
    </Link>
  )
}

export default ClickDelete