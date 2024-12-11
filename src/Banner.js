import React, { useEffect, useState } from 'react'
import "./Banner.css"
import Axios  from './Axios'
import request from './request'
const base_URl='https://image.tmdb.org/t/p/original/';
function Banner({fetchUrl}) {
    
        const [banner,setBanner] = useState([]);
        useEffect(()=>{
          async  function fetchBanners (){
                const response= await Axios.get(request.fetchBanner);
                setBanner(response.data.results[Math.floor(Math.random()* response.data.results.length)]);
                return response;
            }
            fetchBanners();
            
        }, [])

        function truncate(str,n){
         return str?.length > n ? str.substr(0,n-1)+"...." : str;
        }
    
  return (
    <header
    
    className='banners'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("${base_URl}${banner.backdrop_path}")`,
      backgroundPosition: "center"
    }}
    
    >
    <div className='banner_contents'>
      <h1 className='banner_title' >
           {banner.title || banner.name || banner.original_name}
      </h1>
      <div className='banner_buttons'>
       <button type="" className='banner_button'>play</button>
       <button type=""className='banner_button'>mylist </button>
      </div>
      <h1 className='banner_description'>{truncate(banner.overview, 150)}</h1>
    </div>
    <div className='banner_fadebutton'></div>
    </header>
  )
}

export default Banner
