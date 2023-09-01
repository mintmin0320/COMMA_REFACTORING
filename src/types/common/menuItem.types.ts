import { NavLinkProps } from 'react-router-dom';

export interface MenuItem {
  name: string;
  path: string;
}

/* NavLinkProps의 모든 프로퍼티를 상속받는다. */
export interface CustomNavLinkProps extends NavLinkProps {
  activeClassName: string;
}