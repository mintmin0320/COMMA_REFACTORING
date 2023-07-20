import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Wrap>
        헤더
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #D8D8D8;
  background-color: #fff;
  position: sticky;
  top: 0px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`

export default Header