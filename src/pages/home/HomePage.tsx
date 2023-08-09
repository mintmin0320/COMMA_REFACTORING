import styled from 'styled-components'

// layout
import Home from '../../components/home/Home';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ScrollProgressBar from '../../components/common/ScrollProgressBar';

function HomePage() {
  return (
    <Container>
      <Header />
      <ScrollProgressBar />
      <StyledHomeBox>
        <Home />
      </StyledHomeBox>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHomeBox = styled.div`
  width: 100%;
  display: flex;
  
`;




