import { Fragment } from 'react';
import styled from 'styled-components';

import data from './data.json';

interface TitleProps {
  $title?: string;
}

function Notice() {
  return (
    <Fragment>
      {
        data.map((list) => {
          return (
            <StyledNoticeInfo>
              <StyledNoticeTitle >
                <StyledNoticeInfoText $title='title'>{list.title}</StyledNoticeInfoText>
              </StyledNoticeTitle>
              <StyledNoticeWriter>
                <StyledNoticeInfoText >{list.writer}</StyledNoticeInfoText>
              </StyledNoticeWriter>
              <StyledNoticeDate>
                <StyledNoticeInfoText>{list.create_date}</StyledNoticeInfoText>
              </StyledNoticeDate>
              <StyledNoticeFile>
                <StyledNoticeInfoText>{list.file}</StyledNoticeInfoText>
              </StyledNoticeFile>
            </StyledNoticeInfo>
          )
        })
      }
    </Fragment>
  );
};

export default Notice;

const StyledNoticeInfo = styled.div`
  width: 100%;
  height: 8.5%;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledNoticeInfoText = styled.div<TitleProps>`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$title === 'title' ? 'flex-start' : 'center'};
  padding-left: ${(props) => props.$title === 'title' ? '25px' : '0'};
  font-size: 15px;
`;

const StyledNoticeTitle = styled.div`
  width: 59%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledNoticeWriter = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeDate = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeFile = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;