import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Show from "./components/Show";
import SongList from "./components/SongList";
import Form from "./components/Form";
import ClickAdd from "./components/ClickAdd";
import ClickList from "./components/ClickList";
import Footer from "./components/Footer";
import Delete from "./components/Delete";
import "./App.css";
import ClickDelete from "./components/ClickDelete";
import Typeahead from "./components/Typeahead"

function App() {
  const [songs, setSongs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getSongs = async () => {
      const resp = await axios.get(baseURL, config);
      setSongs(resp.data.records);
    };
    getSongs();
    // console.log(songs)
  }, [toggleFetch]);

  return (
    <div style={{ height: "100%" }} className="App">
      <Nav />
      <div className="main">
        <Route exact path="/">
          <div className="home-click">
            <ClickList />
            <ClickAdd />
            <ClickDelete />
          </div>
        </Route>

        <Route exact path="/song-list">
          <h1>Song List</h1>
       
          <div style={{ maxHeight: "400px", overflow: "scroll" }}className="songs-container">
            {songs.map((song) => (
              <SongList
                key={song.id}
                song={song}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </div>
          <div className="list-delete-div">
            <Link to="/song-list/delete">
              <button id="list-delete-button">Delete A Song</button>
            </Link>
          </div>
        </Route>
        <Route exact path="/song-list/delete">
          <h1>Song List</h1>
          <div style={{ maxHeight: "350px", overflow: "scroll"}} className="songs-container" id="songs-container-delete">
          {songs.map((song) => (
            <Delete key={song.id} song={song} setToggleFetch={setToggleFetch} />
          ))}
          </div>
        
        </Route>
        <Route exact path="/song-list/:id">
          <div className="show-container" style={{ maxHeight: "600px" }} >
          <Show songs={songs} />
          </div>
          <Link to="/Song-List">
          <button>Return To Song List</button>
          </Link>
        </Route>
        <Route exact path="/new">
          <h1>Add A Song</h1>
          <Form songs={songs} setToggleFetch={setToggleFetch} />
        </Route>
        <Route exact path="/search">
            <Typeahead songs={songs} />
        </Route> 
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
