import { styled } from 'styled-components';

function Footer() {
  return (
    <Container>
      <Wrap>
        footer
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 98%;
  height: 100%;
  border: solid 1px black;
`;