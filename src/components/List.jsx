import { useState } from 'react';
import styled from 'styled-components';
import { getSelectedMovieData } from '../sevices/movies.services';

import Card from './Card';

const Container = styled.div`
    border: 1px solid;
    border-radius: 6px;
    margin-bottom: 8px;
`;

const Title = styled.div`
    align-items: center;
    background-color: #818cf8;
    border-bottom: 1px solid;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    padding: 5px;
`;

const Content = styled.div`
    background-color: #a5b4fc;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const List = ({genre, movies, selectedMovieId, setSelectedMovieId}) => {
    const [movieDetails, setMovieDetails] = useState(null);

    const handleSelect = (movieId) =>{
        setSelectedMovieId((prev)=>{
            if(!prev || prev !== movieId){
                return movieId
            }else{
                return null
            }
        })
        if(movieId !== selectedMovieId){
            getSelectedMovieData(movieId).then(({data})=>{
                setMovieDetails((prevState)=>{
                    if(!prevState || data.id !== prevState){
                        return data
                    }
                });
            });
        }
    };    

    return (
        <Container>
            <Title>{genre}</Title>
            <Content>
                {
                    movies.map((movie,index)=>{
                        return (
                            <Card 
                                key={index}
                                movie={movie}
                                movieDetails={movieDetails}
                                onSelectMovie={(movieId)=> handleSelect(movieId)}
                                selected={selectedMovieId === movie?.id}
                            />
                        )
                    })
                }   
            </Content>
        </Container>
    )
}

export default List;