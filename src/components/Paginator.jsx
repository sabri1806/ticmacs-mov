import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
    width: 80%;
`;

const Nav = styled.button`
    background-color: #1d4ed8;
    border-radius: 8px;
    color: white;
    font-size: 30px;
    padding: 0 30px;
    &:disabled{
        background-color: #0c4a6e;
        color: black;
        cursor: not-allowed;
    }
`;

const Paginator = ({page, setPage}) => {
    console.log(page)
   return (
       <Container>
           <Nav disabled={page === 1} onClick={()=> setPage(page-1)}>&lt;</Nav>
           <Nav onClick={()=> setPage(page+1)}>&gt;</Nav>
       </Container>
   )
};

export default Paginator;