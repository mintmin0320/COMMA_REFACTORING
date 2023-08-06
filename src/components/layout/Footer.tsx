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
  height: 120px;
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
`;

const Wrap = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
`;