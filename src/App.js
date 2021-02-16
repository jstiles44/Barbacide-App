import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav"
import Show from "./components/Show"
import Songlist from "./components/Songlist"
import Form from "./components/Form"
import './App.css';

function App() {

  const [songs, setSongs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getSongs = async () => {
      const resp = await axios.get(baseURL, config)
      // console.log(resp.data.records)
      setSongs(resp.data.records)
    }
    getSongs()
  }, [toggleFetch])


  return (
    <div className="App">
      <Nav />
      <Route exact path="/Song-List">
        <div className="songs-container">
        {songs.map((song) => (
          <Songlist key={song.id} song={song} setToggleFetch={setToggleFetch} />
        ))}
        </div>
      </Route>
      <Route exact path="/Song-List/:id">
        <Show songs={songs} />
      </Route>
      <Route exact path="/new">
        <Form songs={songs} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
