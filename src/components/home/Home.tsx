import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Wrap>
        메인페이지
      </Wrap>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  justify-content: center;

`;

const Wrap = styled.div`
  width: 94%;
  height: 100%;
  display: flex;
  border: solid 1px black;
`;



const StyledLogoBox = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
  border-right: solid 1px black;
  
  img {

  }
`;