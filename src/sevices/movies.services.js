import axios from "axios";
import URLs from "./URLs";

const getGenres = () => {
    return axios.get(URLs.MOVIES_GENRES)
};

const getMovieByQuery = (page, keyword) => {
    return axios.get(`${URLs.MOVIE_BY_QUERY}&page=${page}&query=${keyword}`)
}

const getMoviesByGenre = (genre, page) => {
    return axios.get(`${URLs.MOVIE_BY_GENRE}&page=${page}&with_genres=${genre}`)
}

export {getGenres, getMovieByQuery, getMoviesByGenre};