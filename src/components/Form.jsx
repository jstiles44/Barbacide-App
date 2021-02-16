import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { baseURL, config } from "../services"


function Form(props) {
  const [title, setTitle] = useState("")
  const [lyrics, setLyrics] = useState("")
  const [artist, setArtist] = useState("")
  const [author, setAuthor] = useState("")
  const history = useHistory()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSong = {
      title,
      lyrics,
      artist,
      author
    }
    await axios.post(baseURL, { fields: newSong }, config)

    props.setToggleFetch((curr) => !curr)
    history.push("/Song-List")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <label>Lyrics</label>
      <textarea value={lyrics} onChange={(e) => setLyrics(e.target.value)}></textarea>
      <label>Artist</label>
      <input value={artist} onChange={(e) => setArtist(e.target.value)}></input>
      <label>Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      <button type="submit">Add Song</button>
    </form>
  )
}

export default Form