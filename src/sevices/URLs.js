import api_key from "../data/config";

const URLS = {
    MOVIES_GENRES : `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`,
    MOVIE_BY_QUERY : `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&include_adult=false`,
    MOVIE_BY_GENRE : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

export default URLS;