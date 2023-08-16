/*
  공지사항 분류 컴포넌트
  해당 공지사항 분류 버튼 클릭 시 border-bottom color 적용
*/

import { useState } from 'react';
import styled from 'styled-components';

// CSS
const StyledClassificationBox = styled.div`
  width: 96%;
  height: 45px;
  display: flex;
  border-bottom: solid 2px #d8d8d8;
`;

const StyledClassificationItem = styled.div<{ $isSelected?: boolean }>`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 28px;
  cursor: pointer;
  border-bottom: solid 2px ${({ $isSelected }) => ($isSelected ? '#0064ff' : '#d8d8d8')};
  font-weight: ${({ $isSelected }) => ($isSelected ? 'bolder' : '0')};
  font-size: ${({ $isSelected }) => ($isSelected ? '18px' : '15px')};
`;

const NoticeClassification = () => {
  const noticeItem: string[] = ['전체', '대학공지', '소프트웨어공학', '정보공학', '인공지능소프트웨어'];
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <StyledClassificationBox>
      {
        noticeItem.map((item: string, index: number) => {
          return (
            <StyledClassificationItem
              key={item}
              onClick={() => setSelectedItem(index)}
              $isSelected={selectedItem === index}
            >
              {item}
            </StyledClassificationItem>
          )
        })
      }
    </StyledClassificationBox>
  );
};

export default NoticeClassification;