import styled from 'styled-components';

// CSS
const StyledFirstBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(../images/dmu.jpeg) no-repeat center center;
  background-size: cover;
  background-color:#fafafa;
  opacity: 0;  // 초기값
  animation: fadeIn 4s ease forwards;
  margin-top: -55px;

  @keyframes fadeIn {
    to {
      opacity: 0.7;
    }
  }
`;

const StyledAdditionalText = styled.div`
  font-size: 60px;
  font-weight: bolder;
  font-family: 'ADLaMDisplay', sans-serif;
  color: #fff;
  margin-bottom: 40px;
`;

const IntroBanner = () => {
  return (
    <StyledFirstBox>
      <StyledAdditionalText>컴퓨터공학부 학생이라면 </StyledAdditionalText>
      <StyledAdditionalText style={{ paddingBottom: '180px' }}>
        COMMA에서 시작하세요
      </StyledAdditionalText>
    </StyledFirstBox>
  );
};

export default IntroBanner;