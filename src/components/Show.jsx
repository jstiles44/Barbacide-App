import { useParams } from "react-router-dom"
import Songlist from "./Songlist"

function Show(props) {
  // console.log(props.songs)
  const params = useParams()
  const song = props.songs.find((song) => 
    song.id === params.id)
  // console.log(song)
  if (!song) {
    return <h4></h4>
  }


  return (
    <div>
      <h3>{song.fields.title}</h3>
      <h5>{song.fields.lyrics}</h5>
    </div>
  )
}

export default Show