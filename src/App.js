import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav"
import Show from "./components/Show"
import Songlist from "./components/Songlist"
import Form from "./components/Form"
import Clickadd from "./components/Clickadd"
import Clicklist from "./components/Clicklist"
import Footer from "./components/Footer"
import Delete from "./components/Delete"
import './App.css';
import Clickdelete from "./components/Clickdelete";

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
    <div style={{ height: "100%" }} className="App">
      <Nav />
      <div className="main">
       <Route exact path="/">
        <Clicklist />
          <Clickadd />
          <Clickdelete />
       </Route>
      
      <Route exact path="/Song-List">
        <div className="songs-container">
        {songs.map((song) => (
          <Songlist key={song.id} song={song} setToggleFetch={setToggleFetch} />
        ))}
        </div>
        </Route>
        <Route exact path="/Song-List/Delete" >
          {songs.map((song) => (
            <Delete key={song.id} song={song} setToggleFetch={setToggleFetch} />
          ))}
        </Route>
      <Route exact path="/Song-List/:id">
        <Show songs={songs} />
      </Route>
      <Route exact path="/new">
        <Form songs={songs} setToggleFetch={setToggleFetch} />
        </Route>
      </div>
      <div className="footer">
        <Footer />
        </div>
    </div>
  );
}

export default App;
