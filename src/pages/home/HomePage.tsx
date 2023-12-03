import { useState } from 'react';
import styled from 'styled-components';

// layout
import Home from '../../components/home/Home';
import Header from '../../components/common/layout/header/Header';
import Footer from '../../components/common/layout/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

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
  const [isHomePage, setIsHomePage] = useState<boolean>(true);

  return (
    <Container>
      <Header isHomePage={isHomePage} />
      <StyledHomeBox>
        <Home />
      </StyledHomeBox>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
};

export default HomePage;