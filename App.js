import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/Navbarr';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/Carousell';
import Trailer from './components/Trailer';
import Carousell from './components/Carousell';

function App() {
  const [movies, setmovies] = useState ([
    {
    img: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1674674904/amc-cdn/production/2/movies/60200/60201/PosterDynamic/148255.jpg',
    name: 'Shazam! Fury Of The Gods',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
  rating: 5,
  },
  {
    img:'https://bestsimilar.com/img/movie/thumb/a7/27620.jpg',
    name:'Ant-Man and the Wasp: Quantumania',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
    rating: 4,
  },
  {
    img:'https://lumiere-a.akamaihd.net/v1/images/image_7f6d0c66.jpeg?region=0,0,540,810&width=320',
    name:'Avatar: The way Of Water',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
    rating: 2,
  },
  {
    img:'https://lumiere-a.akamaihd.net/v1/images/image_12b443df.jpeg?region=0,0,540,810&width=320',
    name:'The Little Mermaid',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
        rating: 3,
  },
  {
    img:'https://lumiere-a.akamaihd.net/v1/images/image_d287bac4.jpeg?region=0,0,540,810&width=320',
    name:'The Little Mermaid',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
  },
  {
    img:'https://lumiere-a.akamaihd.net/v1/images/image_f166b05d.jpeg?region=0,0,540,810&width=320',
    name:'Guardians of the Galaxy: Volume 3',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
  },
  {
    img:'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/77/00/10/lostc_salone_poster_1400x2100.jpg',
    name:'The Lost City',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 3,
  },
  {
    img:'https://i.redd.it/official-character-posters-for-babylon-v0-z60ntxy7rgn91.jpg?width=1385&format=pjpg&auto=webp&s=cce19bd409804c991eddefbf0305824804075a35',
    name:'Babylon',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 1,
  },
  {
    img:'https://onemoviefiveviews.files.wordpress.com/2020/05/the-high-note-poster.jpg',
    name:'The High Note',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
  rating: 5,
  },
  {
    img:'https://i.pinimg.com/originals/8b/a0/f6/8ba0f65836ec5c677b5c452b1b269436.jpg',
    name:'FootFairy',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 3,
  },
  {
    img:'https://static.dc.com/dc/files/default_images/Movies-Thumb_BlackAdam_1012_63478cad000886.65212101.jpg',
    name:'Black Adam',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
  },
  {
    img:'https://resizing.flixster.com/gYPwvvezoP5wC4qMuQaexeWfXuk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBlYTYyMTM0LTVmNTEtNGJjYi05ZDAzLTc2MmMwNDBlYWFmMi53ZWJw',
    name:'Onward',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
  rating: 5,
  },
  {
    img:'https://thewaltdisneycompany.com/app/uploads/2022/09/1920_Disenchanted_Digital_Teaser_KeyArt_v3_Lg-415x614.jpg',
    name:'Disenchanted',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
  },
  {
    img:'https://insidethemagic.net/wp-content/uploads/2021/01/230d41efc3cc99176da2b138936fdc7b-411x600.jpg',
    name:'Raya And The Last Dragon',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 2,
  },
  {
    img:'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/76/86/ppm_salone_poster_1400x2100.jpg',
    name:'Aladin',
    description:
    "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
  rating: 5,
},
{
  img:'https://i.ytimg.com/vi/6e4rLkENqHM/maxresdefault.jpg',
  name:'Aladin',
  description:
  "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
rating: 5,
},
  ])

  
  const [text, settext] = useState("")
  const [rate, setrate] = useState("")
  return (
    <div>
      <Navbarr settext={settext} setrate={setrate}/>
      <Carousell/>
      <Routes>
        <Route path="/" element={<MoviesList movies={movies} setmovies={setmovies} text={text} rate={rate} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trailer/:name" element={<Trailer movies={movies} />} />
      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
