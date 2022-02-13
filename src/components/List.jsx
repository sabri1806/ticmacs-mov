import styled from 'styled-components';

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

const List = ({genre, movies}) => {
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
                            />
                        )
                    })
                }   
            </Content>
        </Container>
    )
}

export default List;