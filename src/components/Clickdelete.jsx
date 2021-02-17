import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Clickdelete(props) {
  return (
    <Link to="/Song-List/Delete">
      <Button className="delete-button" variant="secondary" size="lg">Delete A Song</Button>
    </Link>
  )
}

export default Clickdelete