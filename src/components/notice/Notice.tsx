/**
  공지사항 리스트
  - 리스트 상세페이지 제작 필요
 */

import styled from 'styled-components';

import NoticeList from './NoticeList';
import NoticeClassification from './NoticeClassification';

// CSS
const Container = styled.div`
  width: 55%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NoticeWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
`;

const StyledNoticeListBox = styled.div`
  width: 96%;
  height: 80%;
`;

const StyledNoticeListInfo = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  background-color: #f5f5f5;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledNoticeListTitle = styled.div`
  width: 59%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeListWriter = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeListDate = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeListFile = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeBtnBox = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const StyledNoticeSearchBox = styled.div`
  width: 70%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  width: 35%;
  height: 40%;
  margin-right: 8px;
  border: solid 1px #d8d8d8;
`;

const StyledSearchBtn = styled.button`
  width: 10%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Notice = () => {
  return (
    <Container>
      <NoticeWrap>
        <NoticeClassification />
        <StyledNoticeListBox>
          <StyledNoticeListInfo>
            <StyledNoticeListTitle>제목</StyledNoticeListTitle>
            <StyledNoticeListWriter>작성자</StyledNoticeListWriter>
            <StyledNoticeListDate>작성일</StyledNoticeListDate>
            <StyledNoticeListFile>첨부파일</StyledNoticeListFile>
          </StyledNoticeListInfo>
          <NoticeList />
        </StyledNoticeListBox>
        <StyledNoticeBtnBox>
          페이지 이동 버튼
        </StyledNoticeBtnBox>
        <StyledNoticeSearchBox>
          <StyledSearchInput />
          <StyledSearchBtn>
            검색
          </StyledSearchBtn>
        </StyledNoticeSearchBox>
      </NoticeWrap>
    </Container>
  );
};

export default Notice;