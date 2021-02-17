import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"


function Songlist(props) {

  

  return (
    
    <div>
      
      <Link to={`/Song-List/${props.song.id}`}>{props.song.fields.title}</Link>
    
      
    </div>
   
  )
}

export default Songlist