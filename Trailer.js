import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
function Trailer({ movies }) {
  const params = useParams();
  const movie = movies.filter((el) => el.name === params.name)[0];
  return (
  
    <div className="trailer">
      <img src={movie.img}/>
      <h6>{movie.name}</h6>
      <p>{movie.description}</p>
      <ReactStars classNames="starte"
        count={5}
        size={20}
        activeColor="Yellow"
        edit={false} value={movie.rating} />
    </div>
 
  )
}

export default Trailer;
