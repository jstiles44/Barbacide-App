import { useParams } from "react-router-dom"
import Songlist from "./Songlist"

function Show(props) {
  // console.log(props.songs)
  const params = useParams()
  const song = props.songs.find((song) => 
    song.id === params.id)
  // console.log(song.fields.lyrics.length)
  

  if (!song) {
    return <h4></h4>
  }

 
  
  
  

  return (
    <div className="lyrics-container">
      <h3>{song.fields.title}</h3>
      <pre className={(song.fields.lyrics.length < 650 ? "one-collumn" : "two-collumn")}>{song.fields.lyrics}</pre>
    </div>
  )
}

export default Show