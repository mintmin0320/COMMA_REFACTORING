/**
  공지사항 리스트
  - 분류 버튼 분류작성 필요
  - 리스트 상세페이지 제작 필요
 */

import styled from 'styled-components';
import Notice from './Notice';
import { useState } from 'react';

function NoticeList() {
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
          <Notice />
        </StyledNoticeListBox>
        <StyledNoticePageBtnBox>
          버튼
        </StyledNoticePageBtnBox>
        <StyledNoticePageSearchBox>
          검색
        </StyledNoticePageSearchBox>
      </NoticeWrap>
    </Container>
  );
};

export default NoticeList;

const Container = styled.div`
  width: 55%;
  height: 100%;
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

const StyledNoticePageBtnBox = styled.div`
  width: 10%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const StyledNoticePageSearchBox = styled.div`
  width: 10%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;