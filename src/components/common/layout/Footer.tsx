import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaLinkedin, FaGithub } from '../icons';

// CSS
const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #F5F6F7;
`;

const StyledFooterWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
`;

const StyledIconLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none; 
`;

const StyledInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bolder;
  font-family: 'ADLaMDisplay', sans-serif;
`;

const Footer = () => {
  return (
    <Container>
      <StyledFooterWrap>
        <StyledInfo>
          <StyledIconLink to='https://github.com/mintmin0320/COMMA_REFACTORING'>
            <FaGithub size='25px' color='#000' />
          </StyledIconLink>
          <StyledIconLink to='https://www.linkedin.com/in/%ED%95%98%EB%AF%BC-%EB%B0%95-0aba16285/'>
            <FaLinkedin size='25px' color='#20C997' />
          </StyledIconLink>
        </StyledInfo>
        <StyledInfo>
          Copyright 2023. mintmin inc. all rights reserved.
        </StyledInfo>
      </StyledFooterWrap>
    </Container>
  );
};

export default Footer;