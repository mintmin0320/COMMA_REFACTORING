import styled from 'styled-components';

// CSS
/* 변경 필요 */
const StyledWithdrawalBox = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const StyledRightPreviewImgBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPreviewImgBox = styled.div`
  width: 144px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), 
  linear-gradient(to right, #00c6ff 0%,  #0027ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 50%;
`;

const StyledPreviewImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

const StyledRightButtonBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledRightButton = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px silver;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ProfileImgChangeForm = () => {
  return (
    <StyledWithdrawalBox>
      <StyledRightPreviewImgBox>
        <StyledPreviewImgBox>
          <StyledPreviewImg src='./images/mintmin.jpg' />
        </StyledPreviewImgBox>
      </StyledRightPreviewImgBox>
      <StyledRightButtonBox>
        <StyledRightButton>사진 업로드</StyledRightButton>
        <StyledRightButton>사진 삭제</StyledRightButton>
      </StyledRightButtonBox>
    </StyledWithdrawalBox>
  );
};

export default ProfileImgChangeForm;