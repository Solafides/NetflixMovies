import React,{useState,useEffect} from 'react'
import Axios from "./Axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_Url='https://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLarge}) {
  const [movie,setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  useEffect(()=>{
    async function fetchData(){
      const requests= await Axios.get(fetchUrl)
// console.log(requests);
      setMovie(requests.data.results)
      // setMovie(requests.data.genres)
      return requests;
    }
    fetchData();


  },[fetchUrl])

  const opts= {
    height: "390",
    width: "980px",
    playerVars: {
      autoplay: 1,
    }
  };

  const handleClick=(movie)=>{
   if(trailerUrl){
    setTrailerUrl("");
   }
   else{
    movieTrailer(movie?.name || movie?.title || movie?.original_name)
    .then((url)=>{
        const urlParams= new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"))
    })
    .catch((error)=>{
      console.log(error);
    })
   }
  }

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movie && movie.map((movies)=>(
          <img className={`row_poster ${isLarge && 'row_posterLarge' }`}

             onClick={()=> handleClick(movies)}
             src={`${base_Url}${ isLarge ? movies.poster_path: movies.backdrop_path}`}
             alt={movies.name}
/>
        ))}
      </div>
      <div style={{padding: "40px", marginLeft: "100px"}}>
      { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  )
}

export default Row;
