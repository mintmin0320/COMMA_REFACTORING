import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #F5F6F7;
`;

export const FooterWrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
`;

export const IconLink = styled(Link)`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-family: 'ADLaMDisplay', sans-serif;
`;