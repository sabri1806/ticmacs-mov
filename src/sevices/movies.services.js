import axios from "axios";
import URLs from "./URLs";

const getGenres = () => {
    return axios.get(URLs.MOVIES_GENRES)
};

const getMovieByQuery = (page, keyword) => {
    return axios.get(`${URLs.MOVIE_BY_QUERY}&page=${page}&query=${keyword}`)
};

const getMoviesByGenre = (genre, page) => {
    return axios.get(`${URLs.MOVIE_BY_GENRE}&page=${page}&with_genres=${genre}`)
};

const getSelectedMovieData = (movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=314dd2fd158d1a156815bfda6f2037c3&language=en-US`)
}

export {getGenres, getMovieByQuery, getMoviesByGenre, getSelectedMovieData};