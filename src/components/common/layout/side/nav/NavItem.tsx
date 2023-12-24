import * as S from './NavItem.style';

import {
  HiUser,
  FaShoppingBasket,
  BsFillChatDotsFill,
  BsFillGearFill,
} from '../../../icons';

interface MenuItem {
  icon: JSX.Element;
  path: string;
  ariaLabel: string;
}

const NavItem = () => {
  const isAdmin = true;

  const menuItems: MenuItem[] = [
    { icon: <HiUser />, path: '/profile', ariaLabel: '마이페이지' },
    { icon: <FaShoppingBasket />, path: '/basket', ariaLabel: '장바구니' },
    { icon: <BsFillChatDotsFill />, path: '/', ariaLabel: '채팅' },
    ...(isAdmin ? [{ icon: <BsFillGearFill />, path: '/admin/user-info', ariaLabel: '관리자 페이지' }] : [])
  ];

  return (
    <>
      {menuItems.map(({ icon, path, ariaLabel }: MenuItem) =>
        <S.NavLink to={path} aria-label={ariaLabel} key={path} >
          {icon}
        </S.NavLink>
      )}
    </>
  );
};

export default NavItem;