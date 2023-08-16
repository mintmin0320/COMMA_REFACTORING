/*
  날짜 주석은 테스트 및 배포 시 해제
*/

import { useState, useEffect } from 'react';
import styled from 'styled-components';

// CSS
const Container = styled.div`
  width: 80%;
  height: 160px;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const StyledDateBox = styled.div`
  width: 100%;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledDivisionBox = styled.div`
  width: 100%;
  display: flex;
`;

const StyledMenuBox = styled.div`
  width: 100%;
  height: 120px;
  display: grid;
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

const StyledMenu = styled.p`
  width: 83%;
  height: 18px;
  font-size: 15px;
  display: flex;
  padding-top: 2px;
`;

const Diet = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 120000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    let formattedDate = date.toLocaleDateString('ko-KR', options);

    /*
      endsWith()
      - 특정 문자열이 지정된 문자 또는 문자열로 끝나는지 확인하는 문자열 메서드
      - 불리언 값을 반환
    */
    return formattedDate.endsWith('.') ? formattedDate.slice(0, -1) : formattedDate;
  };

  return (
    <Container>
      <StyledDateBox>
        2023. 08. 14
      </StyledDateBox>
      <StyledDivisionBox>
      </StyledDivisionBox>
      <StyledMenuBox>
        <StyledMenu>- 백미밥</StyledMenu>
        <StyledMenu>- 닭가슴살순살튀김</StyledMenu>
        <StyledMenu>- 메추리알조림</StyledMenu>
        <StyledMenu>- 두부시금치무침</StyledMenu>
        <StyledMenu>- 배추김치</StyledMenu>
        <StyledMenu>- 두부스팸김치전골</StyledMenu>
      </StyledMenuBox>
    </Container>
  );
};

export default Diet;