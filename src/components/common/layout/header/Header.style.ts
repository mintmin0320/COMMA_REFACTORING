import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $backgroundColor: string, $borderBottom: string }>`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: ${props => props.$borderBottom};
  background-color: ${props => props.$backgroundColor};
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

export const LogoBox = styled(Link)`
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const SiteTitle = styled.p`
  width: 30%;
  height: 45px;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin-left: 8px;
`;

export const MenuList = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuLink = styled(Link)`
  width: 18%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #585858;
  font-weight: 400;
`;
