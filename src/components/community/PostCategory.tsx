/*
  게시물 카테고리 메뉴
*/

import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// types
import { MenuItem } from '../../types/common';

// CSS
const StyledPostCategoryBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border: solid 1px #d8d8d8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 25px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;  // Link의 기본 스타일 제거
  color: inherit;  // 텍스트 색상을 상속받도록 설정
`;

const StyledPostCategoryItem = styled.div<{ $isSelected?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#f0f0f0' : '#fff')};
  cursor: pointer;
  font-weight: ${({ $isSelected }) => ($isSelected ? 'bolder' : '0')};
  font-size: ${({ $isSelected }) => ($isSelected ? '18px' : '15px')};
`;

const PostCategory = () => {
  const menuItems: MenuItem[] = [
    { name: '전체', path: '/' },
    { name: 'Q&A', path: '/qa' },
    { name: '자유게시판', path: '/freeboard' },
    { name: '팀원 모집', path: '/recruitment' },
  ];
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <StyledPostCategoryBox>
      {menuItems.map((item, index) => (
        <StyledLink
          key={item.name}
          to={item.path}
          onClick={() => setSelectedItem(index)}
        >
          <StyledPostCategoryItem
            $isSelected={selectedItem === index}
          >
            {item.name}
          </StyledPostCategoryItem>
        </StyledLink>
      ))}
    </StyledPostCategoryBox>
  );
};

export default PostCategory;