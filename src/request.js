
const APIkey= "771094eb7c70920689325ab0f54a9b40";
// https://api.themoviedb.org/3/genre/movie/list?language=en

// const Data="https://api.themoviedb.org/3/discover/movie?api_key=771094eb7c70920689325ab0f54a9b40"

const request= {
    fetchTrending: `/movie/top_rated?api_key=${APIkey}`,
    fetchOriginals: `/discover/tv?api_key=${APIkey}`,
    fetchBanner: `/trending/movie/day?api_key=771094eb7c70920689325ab0f54a9b40`,
    fetchGenre: `/genre/tv/list?api_key=${APIkey}language=en`,
    fetchHorror: `/discover/movie?api_key=771094eb7c70920689325ab0f54a9b40`,
}
export default request;