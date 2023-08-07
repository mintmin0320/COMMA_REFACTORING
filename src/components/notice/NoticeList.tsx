import styled from 'styled-components';

function NoticeList() {
  return (
    <Container>
      <NoticeWrap>
        <StyledClassificationBox>
          <StyledClassificationLink>대학공지</StyledClassificationLink>
          <StyledClassificationLink>소프트웨어공학</StyledClassificationLink>
          <StyledClassificationLink>정보공학</StyledClassificationLink>
          <StyledClassificationLink>인공지능</StyledClassificationLink>
        </StyledClassificationBox>
        <StyledNoticeListBox>
          <StyledNoticeListInfo>
            <StyledNoticeListTitle>제목</StyledNoticeListTitle>
            <StyledNoticeListWriter>작성자</StyledNoticeListWriter>
            <StyledNoticeListDate>작성일</StyledNoticeListDate>
            <StyledNoticeListFile>첨부파일</StyledNoticeListFile>
          </StyledNoticeListInfo>
        </StyledNoticeListBox>
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
  width: 94%;
  height: 80px;
  display: flex;
  align-items: flex-end;
  border-bottom: solid 2px #000;
`;

const StyledClassificationLink = styled.div`
  width: 20%;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeListBox = styled.div`
  width: 94%;
  height: 80%;
`;

const StyledNoticeListInfo = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
`;

const StyledNoticeListTitle = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const StyledNoticeListWriter = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const StyledNoticeListDate = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const StyledNoticeListFile = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;