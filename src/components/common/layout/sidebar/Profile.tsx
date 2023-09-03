import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icons
import { BsFillBasketFill, BsFillChatDotsFill, BsFillGearFill } from "react-icons/bs";
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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

const StyledNavBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(Link) <{ $right?: boolean }>`
  width: 25%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid ${({ $right }) => (!$right ? '2px #d8d8d8' : '0px')};
  text-decoration: none;
  color: inherit;
`;

const Profile = () => {
  const isAdmin = true;

  return (
    <ProfileWrap>
      <StyledProfileBox>
        <StyledProfileFrame>
          <StyledProfile src='../images/mintmin.jpg' alt='' />
        </StyledProfileFrame>
      </StyledProfileBox>
      <StyledNavBox>
        <StyledNavLink to='/profile' >
          <BiSolidUser size='20px' />
        </StyledNavLink>
        {isAdmin && (
          <StyledNavLink to='/admin/user-info'>
            <BsFillGearFill size='20px' />
          </StyledNavLink>
        )}
        <StyledNavLink to='/basket'>
          <BsFillBasketFill size='20px' />
        </StyledNavLink>
        <StyledNavLink to='/'>
          <BsFillChatDotsFill size='20px' />
        </StyledNavLink>
        <StyledNavLink to='/' $right={true}>
          <RiLogoutBoxRFill size='20px' />
        </StyledNavLink>
      </StyledNavBox>
    </ProfileWrap>
  );
};

export default Profile;