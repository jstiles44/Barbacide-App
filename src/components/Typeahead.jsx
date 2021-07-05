import { useState } from "react"


function Typeahead(props) {
  const [title, setTitle] = useState("")
  
  const filteredSongs = props.songs.filter((song) => song.fields.title.includes(title))
  console.log(filteredSongs)

  return (
    <div className="typeahead">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className="typeahead-results">
        {filteredSongs.map((song) => (
          <p key={song.id}>{song.fields.title}</p>
        ))}
      </div>
    </div>
  )
 
}

export default Typeahead