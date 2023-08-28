import styled from 'styled-components';

// CSS
const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        footer
      </FooterWrap>
    </Container>
  );
};

export default Footer;

