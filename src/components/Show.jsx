import { useParams } from "react-router-dom"

function Show(props) {
  const params = useParams()
  const song = props.songs.find((song) => 
    song.id === params.id)
 
  if (!song) {
    return null
  }

  return (
    <div className="lyrics-container">
      <h3>{song.fields.title}</h3>
      <pre className={(song.fields.lyrics.length < 650 ? "one-column" : "two-column")}>{song.fields.lyrics}</pre>
    </div>
  )
}

export default Show