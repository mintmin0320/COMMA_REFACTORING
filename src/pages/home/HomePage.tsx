import styled from 'styled-components'

// layout
import Home from '../../components/home/Home';
import Header from '../../components/common/layout/Header';
import Footer from '../../components/common/layout/Footer';

import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ScrollProgressBar from '../../components/common/ScrollProgressBar';

// CSS
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

const HomePage = () => {
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