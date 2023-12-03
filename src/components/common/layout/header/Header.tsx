import { useEffect, useState } from 'react';

import { debounce } from 'lodash';

import { MenuItem, HeaderProps } from '../../../../types/common';

import * as S from './Header.style';

const Header = ({ isHomePage = false }: HeaderProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [borderBottom, setBorderBottom] = useState<string>('none');

  const headerItem: MenuItem[] = [
    { name: '공지사항', path: '/notice' },
    { name: '실습재료', path: '/product' },
    { name: '커뮤니티', path: '/community' },
    { name: '메뉴4', path: '/' },
  ];

  useEffect(() => {
    if (!isHomePage) {
      setBackgroundColor('#fff');
      setBorderBottom('solid 1px #D8D8D8');
    }

    const handleScroll = debounce(() => {
      if (window.scrollY > 25) {
        setBackgroundColor('#fff');
        setBorderBottom('solid 1px #D8D8D8');
      } else {
        if (isHomePage) {
          setBackgroundColor('transparent');
          setBorderBottom('none');
        } else {
          setBackgroundColor('#fff');
          setBorderBottom('solid 1px #D8D8D8');
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <S.HeaderContainer
      $backgroundColor={backgroundColor}
      $borderBottom={borderBottom}>
      <S.LogoBox to='/' aria-label='홈 이동'>
        <S.LogoImg src='../images/blue_bg.svg' alt='Logo' />
        <S.SiteTitle>
          COMMA
        </S.SiteTitle>
      </S.LogoBox>
      <S.MenuList>
        {headerItem.map(({ name, path }) => (
          <S.MenuLink
            key={name}
            to={path}
            aria-label={`${name} 이동`}
          >
            {name}
          </S.MenuLink>
        ))}
      </S.MenuList>
    </S.HeaderContainer>
  );
};

export default Header;