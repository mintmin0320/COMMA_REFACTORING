import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { debounce } from 'lodash';

import ScrollProgressBar from '../ScrollProgressBar';

//types
import { MenuItem } from '../../../types/common';
import { HeaderProps } from '../../../types/common';

// CSS
const Container = styled.div<{ $backgroundColor: string, $borderBottom: string }>`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${props => props.$borderBottom};
  background-color: ${props => props.$backgroundColor};
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const StyledHeaderWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoBox = styled(Link)`
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogoImg = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledLogoTitle = styled.div`
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

const StyledMenuList = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuLinkBox = styled(Link)`
  width: 18%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #585858;
  font-weight: 400;
`;

const Header = ({ isHomePage = false }: HeaderProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [borderBottom, setBorderBottom] = useState<string>('none');
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);

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
        setShowProgressBar(!isHomePage);
      } else {
        if (isHomePage) {
          setBackgroundColor('transparent');
          setBorderBottom('none');
          setShowProgressBar(false);
        } else {
          setBackgroundColor('#fff');
          setBorderBottom('solid 1px #D8D8D8');
          setShowProgressBar(true);
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <Container $backgroundColor={backgroundColor} $borderBottom={borderBottom}>
      <StyledHeaderWrap>
        <StyledLogoBox to='/'>
          <StyledLogoImg src='./images/blue_bg.svg' />
          <StyledLogoTitle>
            COMMA
          </StyledLogoTitle>
        </StyledLogoBox>
        <StyledMenuList>
          {headerItem.map(({ name, path }) => (
            <StyledMenuLinkBox
              key={name}
              to={path}
            >
              {name}
            </StyledMenuLinkBox>
          ))}
        </StyledMenuList>
      </StyledHeaderWrap>
      {isHomePage ? null : showProgressBar && <ScrollProgressBar />}
    </Container>
  );
};

export default Header;