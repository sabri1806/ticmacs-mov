import axios from "axios";
import { useEffect, useState } from 'react';
import styled from "styled-components";

import SearchComponent from './SearchComponent';
import List from './List';
import Paginator from './Paginator';
import GenresList from "./GenresList";
import { getGenres, getMovieByQuery, getMoviesByGenre } from '../sevices/movies.services';

const Container = styled.div`
   margin: 16px;
`;

const MovieListContainer= styled.div`
    width: 80%;
`;

const ListsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Movies =() => {
    const [movies, setMovies] = useState([]);
    const [moviesGenres, setMoviesGenres] = useState({});
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [moviesByGenres , setMoviesByGenres ] = useState({});
    const [isGenreSelected, setIsGenreSelected] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        if(keyword.length > 3){
            getMovieByQuery(page,keyword).then(({ data }) => {
                setMovies(data?.results)
            })
        }
        if(isGenreSelected){
            handleGenreChange(selectedGenre, page)
        }
    }, [page, keyword]);
    

    useEffect(() => {
        getGenres().then(({ data }) => {
            let genres = {0 : 'Others'};
            data?.genres.forEach(genre=>{
                genres[genre?.id] = genre?.name
            })
            setMoviesGenres(genres)
        })
    }, [])

    useEffect(() => {
      let moviesByGenresTemp = {};
      if(Object.keys(moviesGenres).length > 0 ){
        movies.forEach(movie=>{
            if(movie.genre_ids.length > 0 ){
                movie.genre_ids.forEach( genre =>{ 
                    const currentMovies= moviesByGenresTemp[genre] || []
                    moviesByGenresTemp[genre] = [...currentMovies, movie]
                })
            }else{
                const currentMovies = moviesByGenresTemp[0] || []
                moviesByGenresTemp[0] = [...currentMovies, movie]

            }
        })
        setMoviesByGenres(moviesByGenresTemp)
      }
      
    }, [movies, moviesGenres])

    const handleKeywordChange = (keyword) => {
        setKeyword(keyword);
        setPage(1);
        setIsGenreSelected(false);
    };

    const handleGenreSelection = (selected) =>{
        setKeyword('')
        setPage(1)
        setIsGenreSelected(true)
        const genresKeys = Object.keys(moviesGenres)
        genresKeys.map(genre=>{
            if(moviesGenres[genre] === selected){
                setSelectedGenre(genre)
                handleGenreChange(genre, 1)
            }
        })
    };

    const handleGenreChange = (genre, page) => {
        getMoviesByGenre(genre, page).then(({data})=>{
            setMoviesByGenres({[genre] : data.results})
        })
    }

    return(
        <Container>
            <SearchComponent
                keyword={keyword}
                onChange={(keyword)=> handleKeywordChange(keyword)}
            />
            <ListsContainer>
                <MovieListContainer>
                {
                    Object.keys(moviesByGenres).map((genreKey,index)=> {
                        return (
                                <List
                                    key={index}
                                    genre={moviesGenres[genreKey]}
                                    movies={moviesByGenres[genreKey]}
                                />
                        )
                    })
                }
                </MovieListContainer>
                <GenresList genres={moviesGenres} handleGenreSelection={(selected)=>handleGenreSelection(selected)}/>
            </ListsContainer>
            { Object.keys(moviesByGenres).length > 0  &&
                <Paginator page={page} setPage={setPage}/>
            }
            
        </Container>
    )
};

export default Movies;