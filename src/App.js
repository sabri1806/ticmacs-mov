import styled from "styled-components";

import Movies from './components/Movies';

const Container = styled.div`
  background-color: #ede9fe;
`;

const Header= styled.div`
  background-color: #1e3a8a;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

function App() {
  return (
    <Container className="App">
      <Header className="App-header">
        Vi-Datec Proyect
      </Header>
      <Movies/>
    </Container>
  );
}

export default App;
