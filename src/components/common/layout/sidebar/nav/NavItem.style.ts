import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link) <{ $right?: boolean }>`
  width: 25%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid ${({ $right }) => (!$right ? '2px #d8d8d8' : '0px')};
  text-decoration: none;
  color: inherit;
  font-size: 24px;
`;
