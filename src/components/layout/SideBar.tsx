import styled from 'styled-components';


function SideBar() {
  return (
    <Container>
      <Wrap>
        사이드바
      </Wrap>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 15%;
  height: 90%;
  display: flex;
  justify-content: flex-end;
`;

const Wrap = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  border: solid 1px black;
`;