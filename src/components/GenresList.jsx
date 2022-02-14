import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-left: 16px;
    width: 20%;
`;

const Genre = styled.button`
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    margin: 3px 0;
    padding: 5px;
`;

const GenresList= ({genres, handleGenreSelection}) => {

    return(
        <Container>
            {
                Object.values(genres)?.sort().map((genre, index)=>{
                    if(genre !== 'Others' ){
                     return (
                        <Genre key={index} type="text" value={genre} onClick={(e)=>handleGenreSelection(e.target.value)}>
                            {genre}
                        </Genre>
                     )
                    }
                })
            }
        </Container>
    )
};

export default GenresList;