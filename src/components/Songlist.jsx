import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"


function SongList(props) {

  

  return (
    
    <div >
      <Link className="song-title" to={`/song-list/${props.song.id}`}>{props.song.fields.title}</Link>
    </div>
   
  )
}

export default SongList