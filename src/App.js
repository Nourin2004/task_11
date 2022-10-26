
import './App.css';
import MainContent from './components/screens/MainContent';
import Sidebar from './components/screens/Sidebar';
import Profiles from './components/screens/Profiles';

import styled from 'styled-components';

function App() {
  return (
    <>
    <Container>
    <Sidebar/>
    <Profiles/>

<MainContent/>
    </Container>


  </>
  );
}
const Container = styled.div`
  display: flex;
  
`;
export default App;
