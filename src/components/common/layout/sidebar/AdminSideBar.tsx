import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// common-style
import { StyledLogoImg, StyledLogoTitle } from '../../../styles/CommonStyles';

// CSS
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-right: solid 1px #d8d8d8;
`;

const StyledLogoBox = styled(Link)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenuBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  border-top: solid 1px #d8d8d8;
`;

const StyledMenu = styled.div<{ $isSelected?: boolean }>`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: 'ADLaMDisplay', sans-serif;
  font-weight: 600;
  background-color: ${({ $isSelected }) => ($isSelected ? ' #0064ff' : '#f2f2f2')};
  color: ${({ $isSelected }) => ($isSelected ? ' #fff' : '#000')};
  border-bottom: solid 1px #d8d8d8;
  cursor: pointer;
`;

const AdminSideBar = () => {
  const noticeItem: string[] = ['회원목록', '주문목록', '상품추가'];
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <Container>
      <StyledLogoBox to='/'>
        <StyledLogoImg src='../images/blue_bg.svg' />
        <StyledLogoTitle>COMMA</StyledLogoTitle>
      </StyledLogoBox>
      <StyledMenuBox>
        {noticeItem.map((item: string, index: number) => (
          <StyledMenu
            key={item}
            onClick={() => setSelectedItem(index)}
            $isSelected={selectedItem === index}
          >
            {item}
          </StyledMenu>
        ))}
      </StyledMenuBox>
    </Container>
  );
};

export default AdminSideBar;