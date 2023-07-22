import React from 'react'
import styled from 'styled-components'

function NoticeList() {
  return (
    <Container>공지사항 리스트</Container>
  );
};

export default NoticeList;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`