import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    background-color: #c7d2fe;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 340px;
    justify-content: space-around;
    margin: 20px;
    position: relative;
    text-align: center;
    width: 250px;
    &>div{
        margin: 3px 0;
    }
    &>div:nth-child(1){
        transform: ${props => props.selected && 'rotateY(180deg)'}; 
    };
    &>div:nth-child(2){
        transform: ${props => props.selected && 'rotateY(0deg)'};
    }
`;

const BaseCard = styled.div`
    backface-visibility: hidden;
    position: absolute;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transition: 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
    width:100%;
`;

const FrontCard = styled(BaseCard)`
    transform: rotateY(0deg);
`;

const BackCard = styled(BaseCard)`
    background-color: #cbd5e1;
    color: black;
    display:flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    transform: rotateY(180deg);
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin:3px;
`;

const DetailContainer = styled.div`
    margin: 5px 0;
`;

const DetailTitle = styled.div`
    color: #0c4a6e;
    font-weight: 600;
`;

const Card = ({ movie, movieDetails, onSelectMovie, selected }) => {
    const [someActors, setSomeActors] = useState([]);
    const [movieDirectors, setMovieDirectors] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
      let directors=[];
      movieDetails?.crew?.forEach(person=>{
        if(person.job === "Director" && movieDirectors.length < 4){
            directors.push(person.name)
        }
      })
      setMovieDirectors(directors);
      
      setSomeActors(movieDetails?.cast?.slice(0,5).map(actor=>{
        return actor.name
      })
      )
    }, [movieDetails])

    useEffect(() => {
      setImage(`https://image.tmdb.org/t/p/w200${movie?.poster_path}`)
    }, [movie])
    

   return(
       <Container selected={selected} onClick={()=> onSelectMovie(movie.id)}>
           <FrontCard>
                <img width="200" height="230" src={image} alt=""/>
                <Title>{movie?.title}</Title>
                <div>{movie?.release_date?.substring(0,4)}</div>
           </FrontCard>
           <BackCard>
                {movieDirectors?.length ?
                    <DetailContainer>
                        <DetailTitle>Direction:</DetailTitle>
                        {movieDirectors.map((director, index)=>{
                            return <div key={index}>{director}</div>
                        })}
                    </DetailContainer>
                    : null
                }
                {someActors?.length ?
                    <DetailContainer>
                        <DetailTitle>Main actors:</DetailTitle>
                        {someActors.map((actor,index)=>{
                            return <div key={index} >{actor}</div>
                        })}
                    </DetailContainer>
                    : null
                }
           </BackCard>
       </Container>
   )
};

export default Card;