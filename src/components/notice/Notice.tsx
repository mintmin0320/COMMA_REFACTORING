/**
  공지사항 리스트
  - 분류 버튼 분류작성 필요
  - 리스트 상세페이지 제작 필요
 */

import styled from 'styled-components';

import NoticeList from './NoticeList';

// CSS
const Container = styled.div`
  width: 55%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
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

const StyledClassificationBox = styled.div`
  width: 96%;
  height: 8%;
  display: flex;
  border-bottom: solid 2px #d8d8d8;
`;

const StyledClassificationBtn = styled.div`
  height: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 28px;
  border-bottom: solid 2px #0064ff;
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
`;

const StyledSearchBtn = styled.button`
  width: 10%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Notice() {
  return (
    <Container>
      <NoticeWrap>
        <StyledClassificationBox>
          <StyledClassificationBtn>대학공지</StyledClassificationBtn>
          <StyledClassificationBtn>소프트웨어공학</StyledClassificationBtn>
          <StyledClassificationBtn>정보공학</StyledClassificationBtn>
          <StyledClassificationBtn>인공지능</StyledClassificationBtn>
        </StyledClassificationBox>
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