/*
  간단한 로직이므로 컴포넌트 분리가 아닌 반복문을 사용해 중복 해소
*/

import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icons
import { FaShoppingBasket } from "react-icons/fa";
import { BiConversation } from "react-icons/bi";
import { AiOutlineNotification, AiOutlineQuestionCircle } from "react-icons/ai";

// CSS
const StyledBannerBox = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

const StyledAdditionalText = styled.div`
  height: 80px;
  font-size: 45px;
  font-weight: bold;
  font-family: 'ADLaMDisplay', sans-serif;
  color: #fff;
`;

const StyledMenuBox = styled.div`
  width: 85%;
  height: calc(95% - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenu = styled.div`
  width: 22%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMenuIcon = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenuTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #979FA6;

`;

const StyledMenuButton = styled(Link)`
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0064ff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
`;

const menuItems = [
  {
    icon: AiOutlineNotification,
    title: "공지사항 모아보기",
    link: "/notice"
  },
  {
    icon: FaShoppingBasket,
    title: "실습재료 주문",
    link: "/product"
  },
  {
    icon: BiConversation,
    title: "커뮤니티",
    link: "/community"
  },
  {
    icon: AiOutlineQuestionCircle,
    title: "메뉴 4",
    link: "/"
  },
];

const NavigationMenuBanner = () => {
  return (
    <StyledBannerBox>
      <StyledAdditionalText>
        COMMA에서 제공하는 다양한 서비스를 즐겨보세요
      </StyledAdditionalText>
      <StyledMenuBox>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <StyledMenu key={index}>
              <StyledMenuIcon>
                <Icon size='50%' color='#fff' />
              </StyledMenuIcon>
              <StyledMenuTitle>{item.title}</StyledMenuTitle>
              <StyledMenuButton to={item.link}>살펴보기</StyledMenuButton>
            </StyledMenu>
          );
        })}
      </StyledMenuBox>
    </StyledBannerBox>
  );
};

export default NavigationMenuBanner;