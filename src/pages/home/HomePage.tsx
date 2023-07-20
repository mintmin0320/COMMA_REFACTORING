import styled from 'styled-components'

import Home from '../../components/home/Home';
import SideBar from '../../components/layout/SideBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';


function HomePage() {
  return (
    <Container>
      <Header />
      <StyledHomeBox>
        <SideBar />
        <Home />
      </StyledHomeBox>
      <Footer />
    </Container>
  )
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: blue; */
`;

const StyledHomeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;




