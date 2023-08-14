/*
  상품 목록 페이지 분류 메뉴
  클릭 시 background와 border-bottom 변경
*/

import { useState } from 'react';
import styled from 'styled-components';

// CSS
const StyledProductCategoryBox = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const StyledProductCategoryItem = styled.div<{ $isSelected?: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px ${({ $isSelected }) => ($isSelected ? '#0064ff' : '#fff')};
  background-color: ${({ $isSelected }) => ($isSelected ? '#f0f0f0' : '#fff')};
  cursor: pointer;
`;

function ProductCategory() {
  const menuItem: string[] = ['전체', '센서', '모듈', '조명', 'IC', '모터', '보드', '다이오드', '부저', '스위치', '저항', '캐패시터', '트랜지스터', '기타'];
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <StyledProductCategoryBox>
      {
        menuItem.map((item: string, index: number) => {
          return (
            <StyledProductCategoryItem
              key={item}
              onClick={() => setSelectedItem(index)}
              $isSelected={selectedItem === index}
            >
              {item}
            </StyledProductCategoryItem>
          )
        })
      }
    </StyledProductCategoryBox>
  );
};

export default ProductCategory;