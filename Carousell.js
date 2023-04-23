import Carousel from 'react-bootstrap/Carousel';
import React from 'react'


function Carousell() {
  return (
    <>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/6e4rLkENqHM/maxresdefault.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_final_796_94759fcc.jpeg"
          alt=""
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/76/86/ppm_salone_poster_1400x2100.jpg"
          alt=""
        />

    
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousell