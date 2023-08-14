import styled from 'styled-components';

// icon
import { BsFillBasketFill, BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { RiLogoutBoxRFill } from "react-icons/ri";

// CSS
const ProfileWrap = styled.div`
  width: 80%;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  background-color: #fff;
`;

const StyledProfileBox = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProfileFrame = styled.div`
  width: 144px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), 
  linear-gradient(to right, #00c6ff 0%,  #0027ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const StyledProfile = styled.img`
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
`;

const StyledButtonBox = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const StyledNavButton = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Profile() {
  return (
    <ProfileWrap>
      <StyledProfileBox>
        <StyledProfileFrame>
          <StyledProfile src='./images/mintmin.jpg' alt='' />
        </StyledProfileFrame>
      </StyledProfileBox>
      <StyledButtonBox>
        <StyledNavButton>
          <BiSolidUser size='20px' />
        </StyledNavButton>
        <StyledNavButton>
          <RiLogoutBoxRFill size='20px' />
        </StyledNavButton>
        <StyledNavButton>
          <BsFillBasketFill size='20px' />
        </StyledNavButton>
        <StyledNavButton>
          <BsFillChatDotsFill size='20px' />
        </StyledNavButton>
      </StyledButtonBox>
    </ProfileWrap>
  );
};

export default Profile;