/**
  상품 검색창 컴포넌트
  - 음성 검색 기능 추가 예정
  - 엔터, 검색 버튼으로 검색
*/

import styled from 'styled-components';

import { FcSearch } from '../common/icons'

// CSS
const StyledSearchWrap = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-top: none;
  border-radius: 0 0px 8px 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  background-color: #fff;
`;

const StyledSearchBox = styled.div`
  width: 55%;
  height: 35px;
  display: flex;
  border: solid 1px #d8d8d8;
  border-radius: 30px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
`;

const StyledSearchInput = styled.input`
  width: 81%;
  height: 33px;
  border: 0px;
  font-size: 18px;
  border-radius: 30px 0 0 30px;
`;

const StyledSearchIconBox = styled.div`
  width: 8%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

const StyledSearchCorner = styled.div<{ $corner?: string }>`
  width: 3%;
  height: 40px;
  border-radius: ${({ $corner }) => ($corner === 'left' ? '30px 0 0 30px' : '0 30px 30px 0')};
`;

const SearchBar = () => {
  return (
    <StyledSearchWrap>
      <StyledSearchBox>
        <StyledSearchCorner $corner='left' />
        <StyledSearchInput />
        <StyledSearchIconBox>
          <FcSearch />
        </StyledSearchIconBox>
        <StyledSearchIconBox>
        </StyledSearchIconBox>
        <StyledSearchCorner />
      </StyledSearchBox>
    </StyledSearchWrap>
  );
};

export default SearchBar;