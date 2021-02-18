import { useParams } from "react-router-dom"
import Songlist from "./Songlist"

function Show(props) {
  // console.log(props.songs)
  const params = useParams()
  const song = props.songs.find((song) => 
    song.id === params.id)
  
  

  if (!song) {
    return <h4></h4>
  }

 
  
  
  

  return (
    <div className="lyrics-container">
      <h3>{song.fields.title}</h3>
      <pre>{song.fields.lyrics}</pre>
    </div>
  )
}

export default Show