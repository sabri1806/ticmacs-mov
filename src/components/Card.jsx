import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    background-color: #6366f1;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-around;
    margin: 20px;
    text-align: center;
    width: 200px;
    &>div{
        margin: 3px 0;
    }
`;

const FrontCard = styled.div`

`;

const BackCard = styled.div`
    
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

const ReleaseDate = styled.div`

`;

const Card = ({movie}) => {
    const [image, setImage] = useState(null)

    /* useEffect(() => {
        axios.get("https://api.themoviedb.org/3/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg?api_key=314dd2fd158d1a156815bfda6f2037c3").then((data)=>{
            setImage(data)
        })
      }, []) */

   return(
       <Container>
           <FrontCard>
            <img width="100" height="100" src="" alt=""/>
            <Title>{movie?.title}</Title>
            <ReleaseDate>{movie?.release_date?.substring(0,4)}</ReleaseDate>
           </FrontCard>
           <BackCard>
                info
           </BackCard>
       </Container>
   )
};

export default Card;