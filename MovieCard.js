import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MovieCard({el}) {
  return (
    <Link to ={`/trailer/${el.name}`} style={{textDecoration:'none' , color:'white'}}>
    <div className='cards'>
        <img src= {el.img}/>
        <h4>{el.name}</h4>
        <p>{el.description}</p>
        <div className='start'>
        <ReactStars count={5} size={24} activeColor="#ffd700"  edit={false} value={el.rating}/>,
        </div>
    </div>
    </Link>
  )
}

export default MovieCard