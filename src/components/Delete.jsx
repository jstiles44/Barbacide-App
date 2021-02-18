import { Link } from "react-router-dom"
import axios from "axios"
import { baseURL, config } from "../services"

function Delete(props) {

  const deleteSong = async () => {
    const reviewURL = `${baseURL}/${ props.song.id }`
    await axios.delete(reviewURL, config)
    props.setToggleFetch((curr) => !curr)
  }


  return (
    <div>
      <Link to={`/Song-List/Delete`}>{props.song.fields.title}</Link>
      <button className="delete-song-button" onClick={deleteSong}>Delete Song</button>
    </div>
  )
}

export default Delete