import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

function MoviesList({movies, setmovies, text, rate}) {
  return (
    <div>
    <div className='btnAdd'>
    <AddMovie movies={movies} setmovies={setmovies}/>
    </div >
    <div className='container'>
        {movies.filter((el) => el.name.toLowerCase().includes(text.toLowerCase())
        && el.rating >= rate) 
        .map((el) => ( 
        <MovieCard el={el}/>
        )).reverse()}
    </div>
    </div>
  )
}

export default MoviesList